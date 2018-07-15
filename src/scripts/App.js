import React, { Component } from 'react';
import InAndAdd from './InputAndButton';
import OrderList from "./OrderList";

class App extends Component {
  state = {
    toDosArr :  []
  }
  addval = toDo => {
    const addedValueArr = [...this.state.toDosArr, toDo];
    this.setState({ toDosArr: addedValueArr });
  };
  editval = toDo => {
    const editedValueArr = this.state.toDosArr.map((el, i, arr)=>{
      return el._id != toDo._id ? el : toDo
    });
    this.setState({ toDosArr:  editedValueArr});
  }
  deleteval = elem => {
    const deletedValueArr = this.state.toDosArr.filter((el, i, arr)=>{
      return el._id != elem._id
    });
    this.setState({ toDosArr:  deletedValueArr});
  }
  render() {
    return (
      <div>
        <InAndAdd addval={this.addval}></InAndAdd>
        <OrderList deleteval={this.deleteval} editval={this.editval} toDosArr={this.state.toDosArr}></OrderList>
      </div>
    );
  };

  componentDidMount() {
    const options = {
      headers: {  'Content-Type': 'application/json' }
    };
    fetch('/api/todos', options)
    .then((res)=>{
      // console.log(res);
    return res.json();
    })
    .then((data)=>this.setState({ toDosArr:  data}));
  }
}

export default App;
