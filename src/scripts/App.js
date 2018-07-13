import React, { Component } from 'react';
import InAndAdd from './InputAndButton';
import OrderList from "./OrderList";

class App extends Component {
  state = {
    toDosArr :  []
  }
  toAddVal = toDo => {
    const addedValueArr = [...this.state.toDosArr, toDo];
    this.setState({ toDosArr: addedValueArr });
  };
  toEditVal = toDo => {
    // console.log('editedToDo', toDo);
    const editedValueArr = this.state.toDosArr.map((el, i, arr)=>{
      return el._id != toDo._id ? el : toDo
    });
    console.log('editedValueArr', editedValueArr);
    this.setState({ toDosArr:  editedValueArr});
  }
  toDeleteVal = elem => {
    console.log('elem', elem);
    const deletedValueArr = this.state.toDosArr.filter((el, i, arr)=>{
      return el._id != elem._id
    });
    console.log('deletedValueArr', deletedValueArr);
    this.setState({ toDosArr:  deletedValueArr});
  }
  render() {
    return (
      <div>
        <InAndAdd  toaddval={this.toAddVal}></InAndAdd>
        <OrderList todeleteval={this.toDeleteVal} toeditval={this.toEditVal} toDosArray={this.state.toDosArr}></OrderList>
      </div>
    );
  };

  componentDidMount() {
    const options = {
      headers: {  'Content-Type': 'application/json' }
    };
    fetch('/api/todos', options)
    .then((res)=>{
    return res.json();
    })
    .then((data)=>this.setState({ toDosArr:  data}));
  }
}

export default App;
