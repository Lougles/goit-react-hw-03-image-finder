import React, { Component } from 'react';
import Modal from '../Modal/Modal';


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




  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
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
