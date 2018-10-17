import React, { Component } from 'react'
import './style.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar></Navbar>
          <div className='container'>
            <Route path='/' exact component={Home}></Route>
            <Route path='/room/:id' component={ChatRoom}></Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
