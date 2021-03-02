import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button'
import axios from 'axios';

class App extends Component {
  state = {
    filter: '',
    showModal: false,
    data: [],
    largeImageURL: '',
  }
  componentDidUpdate(_, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.searchImages();
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }
  searchImages = () => {
      axios.get(`https://pixabay.com/api/?key=20134197-bbc807323e2a93a38d1a062c9&q=${this.state.filter}&image_type=photo`).then(response => {
      this.setState({data: response.data.hits})
    });
  }
  handleSearch = query => {
    this.setState({ filter: query, page: 1, data: [] });
  }
  getLargeImg = (largeImageURL) => {
    console.log(largeImageURL);
    this.setState({ largeImageURL:  largeImageURL});
}
  render() {
    const {filter, showModal, largeImageURL } = this.state;
    return (
      <div className="App">
        <Searchbar
          handleSearch= {this.handleSearch}
        />
        <ImageGallery
          getLargeImg={this.getLargeImg}
          data={this.state.data}
          onClick={this.toggleModal}
        />
        {filter && <Button />}
        {showModal &&
          <Modal
          onClose={this.toggleModal}>
          <img src={largeImageURL} alt="qwerty" />
        </Modal> }
      </div>
    );
  }
}

export default App;
