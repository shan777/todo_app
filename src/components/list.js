import React, { Component } from 'react';
import dummyListData from '../dummy_data/list_data';

//console.log('Dummy Data:', dummyListData); //checking if my import dummy data is working

class List extends Component {
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

    render() { //every time state changes, this render function gets called
        //console.log('State: ',this.state);

        //loop over data to display everything in the array
        const listElements = this.state.list.map((item, index) => {  //.map cuz list is an array then callback function inside map()
            return <li className="collection-item" key={item._id}>{item.title}</li>
        });
        return (
            //don't need to wrap everything in <div> ........
                <ul className="collection">
                    {listElements}     {/*array of JSX element */}
                </ul>
            
        );
    }
}

export default List;