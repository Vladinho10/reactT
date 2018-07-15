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
    const data = {toDo, _id};
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }
    const f = fetch(`/api/todos/${_id}`, options);
    f.then((res)=>{
      return res.json();
    }).then((editedData) => {
      this.props.editval(editedData);
    })
  }
  handleDelete = (e) => {
    const {_id} = this.props.el;
    const data = { _id };
    const options = {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }
    const f = fetch(`/api/todos/${_id}`, options);
    f.then((res)=>{
      return res.json();
    }).then((deletedDataId) => {
      this.props.deleteval(deletedDataId);
    })
  }
  render() {
    console.log(`mid props`,  this.props);
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
