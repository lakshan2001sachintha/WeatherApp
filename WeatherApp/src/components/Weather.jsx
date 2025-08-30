import React, { useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchCity, setSearchCity] = useState('');

  const search = async (city) => {
    try {
      console.log(`Searching for: ${city}`);
      // Simulate API call or replace with actual fetch here

      // After successful search
      setSearchPerformed(true);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleSearch = () => {
    if (searchCity.trim()) {
      search(searchCity);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`weather-container ${searchPerformed ? 'searched' : ''}`}>
      <div className="weather">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchCity} 
            onChange={(e) => setSearchCity(e.target.value)} 
            onKeyPress={handleKeyPress} 
          />
          <img 
            src={search_icon} 
            alt="search" 
            onClick={handleSearch}
            role="button"
            aria-label="Search"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>

        <img src={clear_icon} alt="Clear sky" className="weather-icon" />
        <p className="temperature">16°C</p>
        <p className="location">London</p>

        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="Humidity" />
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="Wind Speed" />
            <div>
              <p>3.6 Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>

      {searchPerformed && (
        <div className="additional-content">
          <div className="content-placeholder">
            <h2>Additional Weather Information</h2>
            <p>This is the remaining 2/3 of the page where you can add more content like:</p>
            <ul>
              <li>7-day forecast</li>
              <li>Hourly forecast</li>
              <li>Weather maps</li>
              <li>Historical data</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
