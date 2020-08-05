import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
const api = {
  key:'bad611886d5df499098cbddebe0aefbc',
  base:'https://api.openweathermap.org/data/2.5/'
}
  const date = new Date().toDateString();
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if(e.key ==='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setWeather(result);
        setQuery('');
      });
    }
  }
  return(<>
  <div className={typeof weather.main != 'undefined'? (weather.main.temp > 20? 'app warm' : 'app'): 'app'}>
      <main>
        <div className="search-box">
          <input type="text"
            className='search-bar'
            placeholder='Search...'
            onChange={e=>{ setQuery(e.target.value)}}
            value={query}
            onKeyPress={search}
          />
          {(typeof weather.main != 'undefined')? (
            <div>
          <div className='location-box'>
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className='date'>{date}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)} °C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
          </div>
          ): ('')}
        </div>
      </main>
      </div>
  </>);
}

export default App;
