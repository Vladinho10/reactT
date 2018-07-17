import React, { Component } from 'react';
import LineItem  from './mid';

class OrderList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {toDoArr} =  this.props;
    const listItems = toDoArr.map((el, i) =>{
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
