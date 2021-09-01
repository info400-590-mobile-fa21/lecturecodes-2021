import React from 'react';
import storm from './images/storm.png';
import cloudy from './images/cloudy.png';
import './index.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="panel-body">
          <Caption city="Bloomington"/>
          <WeatherIcon weather={storm} />
          <span class="status">92F</span>
          <DeleteButton />
        </div>
        <div class="panel-body">
          <Caption city="Seattle"/>
          <img class="weather-icon" src={cloudy}></img>
          <span class="status">92F</span>
          <DeleteButton />
        </div>
      </header>
    </div>
  );
}

class Caption extends React.Component{
  render(){
    return(
      <div class="caption-display">
        <span>{this.props.city}</span>
      </div>
      )
  }
}

class WeatherIcon extends React.Component{
  render(){
    return(
      <img class="weather-icon" src={this.props.weather}></img>
      )
  }
}

class DeleteButton extends React.Component{
  render(){
    return(
      <a class="btn clickable" href="#"><FontAwesomeIcon icon={faMinus} /></a>
      )
  }
}


export default App;
