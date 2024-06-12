import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherData from './components/WeatherData';

const weatherData = [
  {
    day: "Monday",
    temperature: 20,
    condition: "Sunny"
  },
  {
    day: "Tuesday",
    temperature: 22,
    condition: "Cloudy"
  },
  {
    day: "Wednesday",
    temperature: 18,
    condition: "Rainy"
  },
    // Add more data as needed
];

function App() {
  const persistedLocation = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState
  (persistedLocation || 'Stockton, CA');
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting');
  }
  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);
  return (
    <div id='main' className="container">
      {/* Search Bar Component */}
      <SearchBar handleSubmit={handleSubmit} searchTerm=
      {searchTerm} handleChange={handleChange} id={'search-city'}>
        <strong>Search City: {searchTerm}</strong>
      </SearchBar>
      {/* Iterating through array */}
      <WeatherData list={weatherData}/>
    </div>
  );
}

export default App;
