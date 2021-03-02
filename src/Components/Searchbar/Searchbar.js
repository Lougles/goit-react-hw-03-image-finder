import React from 'react';

const Searchbar = ({filter, handleChange}) => {
  return (
  <header className="Searchbar">
    <form className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label"></span>
      </button>
      <input
          className="SearchForm-input"
          value={filter}
          onChange={ handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          
      />
    </form>
  </header>
  )
}
export default Searchbar;