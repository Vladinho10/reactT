import React, { Component } from 'react';
import InAndAdd from './InputAndButton';
import OrderList from "./OrderList";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getToDos, addToDo, editToDo, deleteToDo} from '../actions/actionCreators';

class WrappedApp extends Component {
  addval = toDo => {
    this.props.addToDo(toDo)
  };
  editval = (toDo, _id) => {
    this.props.editToDo(toDo, _id)
  };
  deleteval = elem => {
  this.props.deleteToDo(elem)
  }
  render() {
    return (
      <div>
        <InAndAdd addval={this.addval}></InAndAdd>
        <OrderList deleteval={this.deleteval} editval={this.editval} toDoArr={this.props.toDoArr}></OrderList>
      </div>
    );
  };
  componentDidMount() {
  this.props.getToDos()
  }
}

const mapStateToProps = state => { // this.props.toDosArr
  return {
    toDoArr: state
  }
}

const mapDispatchToProps = dispatch => { // this.props.getToDos
  return {
    // getToDos: () => dispatch(getToDos),
    // addToDo: () => dispatch(addToDo),
    // editToDo: () => dispatch(editToDo),
    // deleteToDo: () => dispatch(deleteToDo)
    getToDos: bindActionCreators(getToDos, dispatch),
    addToDo: bindActionCreators(addToDo, dispatch),
    editToDo: bindActionCreators(editToDo, dispatch),
    deleteToDo: bindActionCreators(deleteToDo, dispatch)
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(WrappedApp);

export default App;
