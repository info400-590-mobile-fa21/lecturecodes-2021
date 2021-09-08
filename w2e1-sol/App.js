import React from 'react';
import storm from './images/storm.png';
import cloudy from './images/cloudy.png';
import './index.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AddPanel />
      <CityPanel city="Bloomington" src={storm} temp="92"/>
      <CityPanel city="Tokyo" src={cloudy} temp="88"/>       
      </header>
    </div>
  );
}

class AddPanel extends React.Component{
  render(){
    return(
      <div class="panel-add">
        <form id='input_form'>
          <input type="text" name="city_text" placeholder="City" id="city_text"/>
        </form>
        <a class="btn clickable" href="#"><FontAwesomeIcon icon={faPlus} /></a>
      </div>
      )
  }
}

class CityPanel extends React.Component{
  render(){
    return(
      <div class="panel-body">
        <CityName city ={this.props.city}/>
        <WeatherIcon src={this.props.src}/>
        <Temperature temp={this.props.temp}/>
        <DeleteButton />
      </div>
      )
  }
}

class CityName extends React.Component{
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
      <img class="weather-icon" src={this.props.src}></img>
      )
  }
}

class Temperature extends React.Component{
  render(){
    return(
      <span class="status">{this.prorps.temp}F</span>
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
