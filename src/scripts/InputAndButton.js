import React, { Component } from 'react';

class InAndAdd extends Component {
  constructor(props) {
    super(props)
  }
  // handleChange = (e) => {
  //   this.setState({value: e.target.value})
  // }

  handleAdd = (e) => {
    // alert(this.state.value);
    const data = {
      toDo: inp.value
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {  'Content-Type': 'application/json' }
    };
    if(inp.value) {
      const f = fetch('/api/todos', options);
      f.then((res) => {
        return res.json();
      }).then((addedData) => {
        // console.log('addedData', addedData);
        // console.log(this.props);
        this.props.toaddval(addedData);
      })
      inp.value = ''
    }
  }
  render() {
    return (
      <div toaddval={this.toAddVal}>
        <label>
          to do:
          <input id='inp' type="text" />
        </label>
        <button onClick={this.handleAdd}>Send</button>
      </div>
    )
  }


}

export default InAndAdd;

//value={this.state.value} onChange={this.handleChange}
