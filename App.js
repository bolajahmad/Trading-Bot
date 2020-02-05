import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

/* import Header from './Components/Home/Header/Header'
import About from './Components/Home/About/About'
import AboutCardGroup from './Components/Home/AboutCardGroup/AboutCardGroup'
import Currencies from './Components/Home/Currencies/Currencies'
import News from './Components/Home/News/News'
import Footer from './Components/Home/Footer/Footer' */

import Dashboard from './Components/Dashboard/Dashboard'



function App() {
  return (
    <Router>
      
      <Dashboard />

      {/* <Header />
      <About />
      <AboutCardGroup />
      <Currencies />
      <News />
      <Footer /> */}
    </Router>
  )
}

export default App;
