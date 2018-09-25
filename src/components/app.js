import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
//import dummyListData from '../dummy_data/list_data';




//App WAS a functional component before..
//App owns the data.. in charge of data now
//ower of the data can only control the data!

class App extends Component {
    render() {

        return ( 
            <div className="container">
                <Route path="/" exact component={List}/>    
                {/* // {...routingInfo} is same as history={routingInfo.history} location={routingInfo.location} match={routingInfo.match} adding these as props.. destructuring*/}

                {/*<List error={error} data={list} delete={this.deleteItem}/>    //data here can be called whatever.. data or list, or whatever.. sending through props*/}
                
                <Route path="/add-item" component={AddItem}/>   
                    {/*//add is the new prop */}
            </div>
        );
    }
}

export default App;
