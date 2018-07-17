import React, { Component } from 'react';

class LineItem extends Component {
  constructor(props) {
    super(props)
  }
  state= {
    value: this.props.el.toDo
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleEdit = (e) => {
    const {_id} = this.props.el;
    const toDo = this.state.value;
    this.props.editval(toDo, _id)
  }
  handleDelete = (e) => {
    const {_id} = this.props.el;
    this.props.deleteval(_id)
  }
  render() {
    // console.log(`mid props`,  this.props);
    const {el} = this.props;
    return (
      <li>
          <input type="text" onChange={this.handleChange} defaultValue={el.toDo}/>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}

export default LineItem;
