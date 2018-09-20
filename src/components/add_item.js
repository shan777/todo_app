import React from 'react';

class AddItem extends React.Component { //same exact thing as      "" import React, {Component} 'react'; ""
    state = {
        title: '',
        details: ''
    }

    // handleAddItem(event) {
    handleAddItem = (event) => {  //fat arrow automatically binds it for you   
        event.preventDefault();

        //console.log('New Item: ', this.state);
        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render() {
        const {title, details} = this.state; //so we don't have to type in this.state over and over again.

        return(
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
        );
    }
}

export default AddItem;