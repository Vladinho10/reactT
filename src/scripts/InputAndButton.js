import React, { Component } from 'react';

class InAndAdd extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleAdd = (e) => {
    const data = {  toDo: this.state.value};
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    };
    if(this.state.value) {
      const f = fetch('/api/todos', options);
      f.then((res) => {
        return res.json();
      }).then((addedData) => {
        this.props.addval(addedData);
      })
    }
  }
  render() {
    return (
      <div>
        <label> to do:
          <input type="text" onChange={this.handleChange} />
        </label>
        <button onClick={this.handleAdd}>Send</button>
      </div>
    )
  }
}

export default InAndAdd;
