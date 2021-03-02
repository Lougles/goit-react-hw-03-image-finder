import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import TodoView from '../TodosView/TodosView';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }
    handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({filter: value});
    };

  getFilterItems = () => {
    return this.state.todos.filter(item =>
      item.tags.toLowerCase().includes(this.state.filter.toLocaleLowerCase()))
  };


  render() {
    const { filter, showModal } = this.state;
    return (
      <div className="App">
        <Searchbar
          filter={filter}
          handleChange={this.handleChange}
        />
        <TodoView
          query={filter}
        />
        <button className='Button' type="button" onClick={this.toggleModal}>Open Modal</button>
        {showModal &&
          <Modal onClose={this.toggleModal}>
          <h1>Hello</h1>
          <p>
            Lorem Ipsum является текст-заполнитель обычно используется в графических,
            печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.
          </p>
          <button className='Button' onClick={this.toggleModal}>Close</button>
        </Modal> }
      </div>
    );
  }
}

export default App;
