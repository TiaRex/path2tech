import React from 'react';

function SearchBar() {
    return (
        <section>
            <form>
                <label htmlFor='search-city'>
                    <input type='text' placeholder='Search City'
                    id='search-city' name='search-city'
                    className='search-city'/>
                </label>
                <button type='submit' className='submit-search-city'>
                    Search
                </button>
            </form>
        </section>
    )
}

export default SearchBar;