import { useState } from 'react'
import './App.css'
import Search from './Components/search/search'
import CurrentWeather from './Components/Current-Weather/CurrentWeather'
import { openWeatherMap_URL, openweathermapApi_Key } from './api'
import Forecast from './Components/Forecast/Forecast'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForeCastWeather] = useState(null);

  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${openWeatherMap_URL}/weather?lat=${lat}&lon=${lon}&appid=${openweathermapApi_Key}&units=metric`);
    const forecastWeatherFetch = fetch(`${openWeatherMap_URL}/forecast?lat=${lat}&lon=${lon}&appid=${openweathermapApi_Key}&units=metric`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response)=>{
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse});
        setForeCastWeather({ city: searchData.label, ...forecastResponse})
      })
      .catch((err)=>console.log(err));
  }

  console.log(currentWeather);
  console.log(forecastWeather);
  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
        {forecastWeather && <Forecast data={forecastWeather}/>}
      </div>
    </>
  )
}

export default App
