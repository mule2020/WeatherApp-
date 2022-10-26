
import { useState } from 'react';
import './App.css';

function App() {
  const apiKey = 'codeee'
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
      .then((response) => response.json())
      .then(data => {
        setWeather(data);
        setCity("");
      })


  }
  return (
    <div className="App">
      <h1 className='header'>Welcome,</h1>
      <div>
        <form className='form' onSubmit={getWeather}>
          <input type="text"
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          // onKeyPress={getWeather}


          />
          <button type='submit' className='btn btn-primary'>Search</button>
        </form>
      </div>
      {typeof weather.main === 'undefined' ? (
        <div><b /><p>Enter the city you want!</p></div>
      ) : (
        <div className='wrapper'>
          <hr></hr>
          <p className="city">{weather?.name}</p>
          <p>{weather?.main.temp} F</p>
          <p>{weather?.weather[0].main}</p>
        </div>
      )}

    </div>
  );
}

export default App;
