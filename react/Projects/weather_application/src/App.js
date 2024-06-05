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
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting')
  }
  return (
    <div id='main' className="container">
      {/* Search Bar Component */}
      <SearchBar handleSubmit={handleSubmit}/>
      {/* Iterating through array */}
      <WeatherData list={weatherData}/>
    </div>
  );
}

export default App;
