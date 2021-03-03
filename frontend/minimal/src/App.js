import React, { Component } from 'react';
import NavBar from './Components/navbar';
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
      </div>
    )
  }
}