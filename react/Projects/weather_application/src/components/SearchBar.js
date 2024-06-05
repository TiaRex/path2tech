import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting')
  }
  return (
    <section>
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