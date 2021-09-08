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
        <TimePanel />
        <AddPanel />
        <CityPanel city="Bloomington" weather={storm} temp="92" />
        <CityPanel city="Seatle" weather={cloudy} temp="88" />
      </header>
    </div>
  );
}

class TimePanel extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      time: new Date(),
      visible: true
    }
  }

  updateTime = ()=>{
    this.setState({time: new Date()});
  }

  showTime = ()=>{
    this.setState({
      time: new Date(),
      visitble:true
    });
  }
  hideTime = ()=>{
    this.setState({visible:false});
  }

  render(){

    let time_text = ""
    if(this.state.visible)
      time_text = this.state.time.toString()
    return (
      <div>
        <Time currentTime={time_text}/>
        <TimeButton clickFunction={this.showTime} text="show"/>
        <TimeButton clickFunction={this.hideTime} text="hide"/>
      </div>
    )
  }
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
          <Caption city={this.props.city}/>
          <WeatherIcon weather={this.props.weather} />
          <Temperature temp={this.props.temp}/>
          <DeleteButton />
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
      <a class="btn clickable" href="#"><FontAwesomeIcon icon={faMinus} /></a>
      )
  }
}

class TimeButton extends React.Component{
  render(){
    return(
      <button onClick = {this.props.clickFunction} className="button">{this.props.text}</button>
      )
  }
}

class Time extends React.Component{

  constructor(props){
    super(props);
    // this.state = {time: new Date()}
  }

  // updateTime = ()=>{
  //   this.setState({time: new Date()});
  // }

  render(){
    return (
      <div className="status">
        <span>{this.props.currentTime}</span>   
      </div>
    )
  }
}

export default App;
