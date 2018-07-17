import React, { Component } from 'react';

class InAndAdd extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleAdd = (e) => {
    console.log(`this.props. Inp`, this.props);
    console.log('vvvvvvvvvvvvvvvvvv', this.state.value);
    this.props.addval(this.state.value)
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
