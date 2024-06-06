import React from 'react';

function SearchBar({ handleSubmit, searchTerm, handleChange }) {
  return (
    <section className='search-bar-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search-city'>
          <strong>Search Term: {searchTerm} </strong>
          <br/>
          <input type='text'
          placeholder='Search City'
          id='search-city'
          name='search-city'
          className='search-city'
          onChange={handleChange}
          />
        </label>
        <button type='submit' className='submit-search-city'>
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar;