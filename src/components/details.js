import React, { Component } from 'react';
import axios from 'axios'; //to call the server
import config from '../config';
import NavBtn from './nav_btn';

class Details extends Component {

    state = {
        item: null
    }
    componentDidMount() {
        this.getToDoItem();
    }

    async getToDoItem() {
        const { itemId } = this.props.match.params;
        
        try {
            const resp = await axios.get(`${ config.API_URL }/todos/${ itemId + config.API_KEY }`);
        
            console.log('Response:', resp);

            this.setState({
                item: resp.data.todo
        });
        
        //console.log('State:', this.state);  //can't do this here cuz setState is asynchronous DON'T EVER DO THIS! do it inside render method
        // console.log('Item id:', itemId);
        } catch(err) {
            this.setState({
                item: {}
            });
        }
    }


    render() {
        // console.log('props: ', this.props.match.params.itemId);
        //console.log('State:', this.state);

        const { item } = this.state;

        if(!item) {
            return <h1>LOADING...</h1>;
        }

        if(!item.title) {
            return (
                <div>
                    <h1 className="center">Item Details</h1>
                    <NavBtn to="/" color="purple lighten-3" text="Back To List"/>
                    <h2 className="center">No Item To Display</h2>
                </div>
            );
        }

        return(
            <div>
                <h1 className="center">Item Details</h1>
                <NavBtn to="/" color="purple lighten-3" text="Back To List"/>
                <h2 className="center">{item.title}</h2>
            </div>
        );
    }
}

export default Details;