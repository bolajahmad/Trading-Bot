import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

import Header from './Components/Header/Header'
import About from './Components/About/About'
import AboutCardGroup from './Components/AboutCardGroup/AboutCardGroup'
import Currencies from './Components/Currencies/Currencies'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <Router>
      <Header />
      <About />
      <AboutCardGroup />
      <Currencies />
      <News />
      <Footer />
    </Router>
  )
}

export default App;
