import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/weatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>weather-app</h1>
       <WeatherLocation/>
      </div>
    );
  }
}

export default App;
