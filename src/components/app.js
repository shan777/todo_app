import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
//import dummyListData from '../dummy_data/list_data';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=718_unique_key_sh';


//App WAS a functional component before..
//App owns the data.. in charge of data now
//ower of the data can only control the data!

class App extends Component {

    state = { //defining the state, defining the property on the class, this is javascript
        list: [],
        error: ''  //to display/notify the user the error
    } //don't need to have the constructor

    componentDidMount() {  //lifestyle method
        this.getListData();
    }

}
    //old way
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
            const resp = await axios.get(`${BASE_URL}/tods${API_KEY}`);

            if(!resp.data.success)
                throw new Error('Something went wrong');

            this.setState({
                list: resp.data.todos
            });
        } catch(err) { //error handling portion
            console.log('Get Data Error: ', err.message);

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

    //async way!
    // ..       cleaner way and easier to ready... One or the other !!!!!!!!!!!   .then way  OR  async way
    addItem = async (item) => {  //async way then NO ".then" ONLY when it returns promise 
        /*const resp = */await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        //below now happens after the data is there

        this.getListData();

    }


    deleteItem = async id => {
        console.log('Delete Item ID: ', id);

        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();
    }


    render() {
        const {list, error} = this.state;

        console.log('List: ', list);

        return ( 
            <div className="container">
                <h1 className="center">To-Do List</h1>
                <AddItem add={this.addItem}/>   {/*//add is the new prop */}
                <p className="red-text">{error}</p>
                <List data={list} delete={this.deleteItem}/>    {/*//data here can be called whatever.. data or list, or whatever.. sending through props*/}
            </div>
        );
    }
}

export default App;
