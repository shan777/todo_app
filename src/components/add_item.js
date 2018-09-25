import React from 'react';
import NavBtn from './nav_btn';
import axios from 'axios';
import config from '../config';

class AddItem extends React.Component { //same exact thing as      "" import React, {Component} 'react'; ""
    state = {
        title: '',
        details: ''
    }

    // handleAddItem(event) {
    handleAddItem = async (event) => {  //fat arrow automatically binds it for you   
        event.preventDefault();

        await axios.post(`${config.API_URL}/todos${config.API_KEY}`, this.state);

        this.props.history.push('/'); //take me back home after item is added
    }

    render() {
        const {title, details} = this.state; //so we don't have to type in this.state over and over again.

        // console.log('Add props:', this.props);

        return(
            <div>
                <h1 className="center">Add To Do Item</h1>
                <NavBtn to="/" text="Back To List" color="pink"/>
                <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Title</label>
                        <input onChange={ (e) => this.setState({title: e.target.value}) } //annoymous function w/ event parameter
                        type="text" 
                        value={title}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Details</label>
                        <input onChange={ ({target}) => this.setState({details: target.value}) } 
                        //either one works but with more functionality, won't work.. works with only simple one line input
                        type="text" 
                        value={details}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2 right-align">
                        <button className="btn teal">Add Item</button>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default AddItem;