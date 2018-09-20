import React from 'react';
import Item from './item';

//console.log('Dummy Data:', dummyListData); //checking if my import dummy data is working

const List = (props) => { //every time state changes, this render function gets called --> changed to functional component
    //functional component always have props passed in

        //console.log('State: ',this.state);

        //loop over data to display everything in the array
       // const listElements = this.state.list.map((item, index) => {  //.map cuz list is an array then callback function inside map()
       const listElements = props.data.map((item, index) => {  //.map cuz list is an array then callback function inside map()
            return <Item key={item._id} item={item} delete={() => props.delete(index)}/>
        });
        return (
            //don't need to wrap everything in <div> ........
                <ul className="collection">
                    {listElements}     {/*array of JSX element */}
                </ul>
            
        );
}

export default List;