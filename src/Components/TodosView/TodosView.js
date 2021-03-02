import React, { Component } from 'react';
import axios from 'axios';

class TodoView extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get(`https://pixabay.com/api/?key=20134197-bbc807323e2a93a38d1a062c9&q=${this.props.query}&image_type=photo`).then(response => {
      console.log(response.data.hits);
      this.setState({todos: response.data.hits})
    });
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default TodoView;