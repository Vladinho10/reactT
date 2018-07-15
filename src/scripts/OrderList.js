import React, { Component } from 'react';
import LineItem  from './mid';

class OrderList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(`OrderList this.props Render`, this.props); // skzbic [], heto lcvac
    const {toDosArr} =  this.props;
    const listItems = toDosArr.map((el, i) =>{
      return (
         <LineItem key={el._id} el={el} editval={this.props.editval} deleteval={this.props.deleteval} >
         </LineItem>
      )
    });
    return (
      <ol>{listItems}</ol>
    )
  }
}

export default OrderList;
