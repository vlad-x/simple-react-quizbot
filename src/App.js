import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Quizbot from './bot'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Simple react quizbot</h1>
        </header>
        <div className='quizbot animated fadeIn'>
          <Quizbot />
        </div>
        <footer>
          <div className='u-pull-right links'>
            Powered by
            <a href='https://unitcluster.com/' target='blank'>UnitCluster</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
