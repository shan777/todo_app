import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
//import dummyListData from '../dummy_data/list_data';
import Details from './details';
import NotFound from './not_found';



//App WAS a functional component before..
//App owns the data.. in charge of data now
//ower of the data can only control the data!

class App extends Component {
    render() {

        return ( 
            <div className="container">
            <Switch>
            <Route path="/" exact component={List}/>    
                {/* // {...routingInfo} is same as history={routingInfo.history} location={routingInfo.location} match={routingInfo.match} adding these as props.. destructuring*/}

                {/*<List error={error} data={list} delete={this.deleteItem}/>    //data here can be called whatever.. data or list, or whatever.. sending through props*/}
                
                <Route path="/add-item" component={AddItem}/>   
                    {/*//add is the new prop */}

                <Route path="/item/:itemId" component={Details}/>     
                {/*whatever follows the colon, this will be the property props.match.params.itemId*/} 

                <Route component={NotFound}/>   {/*this is the default*/}
            </Switch>
                
            </div>
        );
    }
}

export default App;
