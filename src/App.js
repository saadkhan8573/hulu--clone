import React, { useState } from 'react'
import Header from './component/header/Header'
import './app.css'
import Nav from './component/header/Nav'
import Results from './component/pages/Results'
import requests from './requests'
import Slider from './component/pages/Slider'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Slider/>
      <Results selectedOption={selectedOption}/>
    </>
  )
}

export default App
