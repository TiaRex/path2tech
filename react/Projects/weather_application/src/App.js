import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherData from './components/WeatherData';
import { getWeatherData } from './services/WeatherService';

function App() {
  const persistedLocation = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState(persistedLocation || 'Stockton, CA');
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getWeatherData();
        console.log(response.data.list);
        setWeatherData(response.data.list);
        setLoading(false);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, []);
  return (
    <div id='main' className={"container"}>
      {/* Search Bar Component */}
      <SearchBar handleSubmit={handleSubmit} searchTerm=
      {searchTerm} handleChange={handleChange} id={'search-city'}>
        <strong>Search City: {searchTerm}</strong>
      </SearchBar>
      {error && <p>There was an error loading your data.</p>}
      {/* Iterating through array */}
      {loading ? <p>Data Loading...</p> : (
        <WeatherData list={weatherData}/>
      )}
      
    </div>
  );
}

export default App;
