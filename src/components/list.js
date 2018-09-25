import React, { Component } from 'react';
import Item from './item';
import NavBtn from './nav_btn';
import config from '../config';
import axios from 'axios';

//console.log('Dummy Data:', dummyListData); //checking if my import dummy data is working

class List extends Component {
    state = { //defining the state, defining the property on the class, this is javascript
        list: [],
        error: ''  //to display/notify the user the error
    }; //don't need to have the constructor

    componentDidMount() {  //lifestyle method
        this.getListData();
    }

   

    //old way of getListData()
    //call server to get data after componentDidMount is called
    // getListData() {
        // const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => { //gets called
        //     //console.log('Server Resp:', resp);

        //     this.setState({
        //         list: resp.data.todos    //sending data to list.. array that contains the list
        //     }); 
        // }).catch( (err) => {
        //     console.log('Get List Data Error: ', err.message);   //  .message makes it easier to read

        //     this.setState({
        //         error: '! ERROR retrieving list data !'
        //     });
        // });

        //builds a url that looks like http://api.reactprototypes.com/todos?key=somekey
        //just using variables to build the url

        //below is to see what's returning ... anytime u see promise, use .then
        //console.log('Axios Return Value: ', resp);

        //then use data to set the data
        // this.setState({
        //     list: dummyListData
        // }); 
    // }


    //async way!
    async getListData() {

        try {
            const resp = await axios.get(`${config.API_URL}/todos${config.API_KEY}`);

            if(!resp.data.success){
                throw new Error('Something went wrong');
            }

            this.setState({
                list: resp.data.todos
            });
        } catch(err) { //error handling portion
            // console.log('Get Data Error: ', err.message);

            this.setState({
                error: 'Error retrieving list data'
            });
        }
    }

    /* old way below
    addItem = (item) => {                             {/*binding with the fat arrow => */ 
        // item._id = new Date().getTime(); //time stamp in miliseconds as an id..temporary

        // this.setState({
        //     list: [item, ...this.state.list] //appending to existing array in my own words ......... item can go beginning of the list or at the end of the list
        // });
        //above was from previous class

    /*     
        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then ((resp) => {   //item is the one we want to send
            console.log('Add Item Resp: ', resp);

            this.getListData(); //recalling the server to get the data again --this is the old syntax


        }).catch( (err) => {
            console.log('Add Item Error: ', err);
        });
        
    }
    */


    deleteItem = async id => {
    // console.log('Delete Item ID: ', id);

        await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);

        this.getListData();
    }

    render() { //every time state changes, this render function gets called --> changed to functional component
    //functional component always have props passed in

        //console.log('State: ',this.state);

        //loop over data to display everything in the array
       // const listElements = this.state.list.map((item, index) => {  //.map cuz list is an array then callback function inside map()
       
    //    console.log('List props:', props);

        const { error, list } = this.state;
        const listElements = list.map((item, index) => {  //.map cuz list is an array then callback function inside map()
            return <Item key={item._id} item={item} delete={() => this.deleteItem (item._id)}/>
        });

        return (
            //don't need to wrap everything in <div> ........
            <div>
                <h1 className="center">To Do List</h1>
                <NavBtn to="/add-item" color="blue darken-2" text="Add Item" />
                <p className="red-text text-darken-1">{error}</p>
                <ul className="collection">
                    {listElements}     {/*array of JSX element */}
                </ul>
            </div>
        );
    }
}

export default List;