import React, { Component } from 'react';
import NavBar from './Components/navbar';
import Wrapper from './Components/wrapper'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <Wrapper />
        <NavBar />
      </div>
    )
  }
}