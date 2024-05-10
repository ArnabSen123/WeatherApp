import { useState } from 'react'
import './App.css'
import Search from './Components/search/search'
import CurrentWeather from './Components/Current-Weather/CurrentWeather'

function App() {

  const handleOnSearchChange = (searchData) =>{
    console.log(searchData);
  }
  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather />
      </div>
    </>
  )
}

export default App
