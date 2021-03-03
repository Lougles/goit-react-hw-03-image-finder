import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button'
import axios from 'axios';
import services from '../../Services/Services';

class App extends Component {
  state = {
    filter: '',
    showModal: false,
    data: [],
    largeImageURL: '',
    page: 1,
    loader: false,
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
    this.setState({ loader: true });
    axios.get(`https://pixabay.com/api/?key=20134197-bbc807323e2a93a38d1a062c9&q=${this.state.filter}&page=${this.state.page}&image_type=photo`).then(response => {
        console.log(response.data);
      this.setState((prevState) => ({
        data: [...prevState.data, ...response.data.hits],
        page: prevState.page + 1
      }))
    }).finally(() => this.setState({loader: false}));
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
        {this.state.loader ? <Loader
          className="loader"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        /> :
        filter &&
        <Button
          onClick={this.searchImages}>
        </Button>}
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
