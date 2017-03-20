import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather/Weather';

// API Key c00940ee338b6857bc61cf9e4f67815c

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
