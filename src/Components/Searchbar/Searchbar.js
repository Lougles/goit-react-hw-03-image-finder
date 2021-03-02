import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    filter: '',
  }
  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
    
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.filter);
    this.setState({ filter: '' });
  }
  render() {
    const { filter } = this.state;
      return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={this.onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>
        </button>
        <input
            className="SearchForm-input"
            value={filter}
            onChange={ this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        />
      </form>
    </header>
  )
  }

}
export default Searchbar;