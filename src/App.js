import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather/Weather';

class App extends Component {
  //Mounting cycle is in a div with Weather
  render() {
    return (
      <div className="app">
        <Weather />
      </div>
    );
  }
}

export default App;
