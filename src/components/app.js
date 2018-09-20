import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
import dummyListData from '../dummy_data/list_data';

//App WAS a functional component before..
//App owns the data.. in charge of data now
//ower of the data can only control the data!

class App extends Component {

    state = { //defining the state, defining the property on the class, this is javascript
        list: []
    } //don't need to have the constructor

    componentDidMount() {  //lifestyle method
        this.getListData();
    }

    getListData() {
        //call server to get data

        //then use data to set the data
        this.setState({
            list: dummyListData
        }) 
    }

    addItem = (item) => {                             {/*binding with the fat arrow => */} 
        item._id = new Date().getTime(); //time stamp in miliseconds as an id..temporary

        this.setState({
            list: [...this.state.list, item] //appending to existing array in my own words ......... item can go beginning of the list or at the end of the list
        });
    }

    deleteItem = (index) => {
        const {list} = this.state;

        const listCopy = list.slice();   //makes the copy of the array
        
        listCopy.splice(index, 1);

        this.setState({
            list: listCopy
        });

    }

    render() {
        const {list} = this.state;

        return ( 
            <div className="container">
                <h1 className="center">To-Do List</h1>
                <AddItem add={this.addItem}/>   {/*//add is the new prop */}
                <List data={list} delete={this.deleteItem}/>    {/*//data here can be called whatever.. data or list, or whatever.. sending through props*/}
            </div>
        );
    }
}

export default App;
