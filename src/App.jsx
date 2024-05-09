import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Components/search'

function App() {

  const handleOnSearchChange = (searchData) =>{
    console.log(searchData)
  }
  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
    </>
  )
}

export default App
