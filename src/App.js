import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MapIn from './components/map'
import Footer from './components/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Aarogya from './components/arogya'
import Precaution from './components/precautions'
import Country from './components/country'
import News from './components/news'
import Symptom from './components/symptoms'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' component={MapIn} exact />
          <Route path='/app' component={Aarogya} />
          <Route path='/precaution' component={Precaution} />
          <Route path='/country' component={Country} />
          <Route path='/news' component={News} />
          <Route path='/symptoms' component={Symptom} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
