import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Map from './components/map'
import Footer from './components/footer'
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom'
import Aarogya from './components/arogya'
import State from './components/state'
import Precaution from './components/precautions'
import Country from './components/country'
import News from './components/news'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' component={Map} exact />
          <Route path='/app' component={Aarogya} />
          <Route path='/state' component={State} />
          <Route path='/precaution' component={Precaution} />
          <Route path='/country' component={Country} />
          <Route path='/news' component={News} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
