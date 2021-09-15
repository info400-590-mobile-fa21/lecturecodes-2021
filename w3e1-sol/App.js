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
        <CityPanel city="Bloomington" weather={storm} temp="92" />
        <CityPanel city="Seatle" weather={cloudy} temp="88" />
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

  state={
    show:true
  }

  displayWeather = () =>{
    this.setState({show: !this.state.show})
  }

  render(){
    return(
      <div class="panel-body">
          <Caption city={this.props.city}/>
          {this.state.show?<WeatherIcon weather={this.props.weather} />:null}
          <Temperature temp={this.props.temp}/>
          <DeleteButton onClick={this.displayWeather}/>
        </div>
      )
  }
}

class Temperature extends React.Component{
  render(){
    return(
      <span class="status">{this.props.temp}F</span>
      )
  }
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
      <a class="btn clickable" href="#" onClick={this.props.onClick}><FontAwesomeIcon icon={faMinus} /></a>
      )
  }
}

export default App;
