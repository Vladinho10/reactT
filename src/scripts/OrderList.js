import React, { Component } from 'react';

class OrderList extends Component {
  constructor(props) {
    super(props)
  }
  editHandler = (elId) => {
    const tempId = document.getElementById(elId);
    console.log('tempId.value', tempId.value);
    const data = {
      toDo: tempId.value,
      _id: elId
    };
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
        }
    }
    const f = fetch(`/api/todos/${elId}`, options);
    f.then((res)=>{
      return res.json();
    }).then((editedData) => {
      this.props.toeditval(editedData);
    })
  }

  deleteHandler = (elId) => {
    const data = {
      _id: elId
    };
    const options = {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
        }
    }
    const f = fetch(`/api/todos/${elId}`, options);
    f.then((res)=>{
      return res.json();
    }).then((deletedDataId) => {
      console.log('deletedDataId', deletedDataId);
      this.props.todeleteval(deletedDataId);
    })
  }


  render() {
    const toDosArray =  this.props.toDosArray;
    const listItems = toDosArray.map((el, i) =>{
    return (
       <li key={el._id}>
         <input id={el._id} type="text" defaultValue={el.toDo}/>
         <button onClick={()=> this.editHandler(el._id)}>Edit</button>
         <button onClick={()=> this.deleteHandler(el._id)}>Delete</button>
       </li>
    )
  });
    return (
      <ol todeleteval={this.toDeleteVal} toeditval={this.toEditVal} >{listItems}</ol>
    )
  }
}

export default OrderList;
