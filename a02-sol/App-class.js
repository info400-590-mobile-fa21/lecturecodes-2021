import React from 'react';
import storm from './images/storm.png';
import cloudy from './images/cloudy.png';
import './index.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      panels: []
    }
  }

  componentDidMount(){
    this.addPanel("Bloomington")
    this.addPanel("Tokyo")
  }

  addPanel = (newCity)=>{

    let newPanel = {
      city:newCity,
      weather:storm,
      temp: 70,
      id: Math.floor(Math.random() * 1000),
      onClick:this.removePanel
    }

    this.setState(prevState => ({
        panels: [...prevState.panels, newPanel]})
    )
  }

  removePanel = (id)=>{
    let newPanels = this.state.panels.filter(item => item.id !== id)
    this.setState({panels:newPanels})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <AddPanel onClick={this.addPanel}/>
          {this.state.panels.map(item=> (<CityPanel {...item} />))}
        </header>
      </div>
    )
  }
}


class AddPanel extends React.Component{

  state = {
    cityname:""
  }

  getText = (event)=>{
    this.setState({cityname:event.target.value})
  }

  render(){
    return(
      <div class="panel-add">
        <form id='input_form'>
          <input type="text" name="city_text" placeholder="City" id="city_text" onChange={this.getText} value={this.state.cityname}/>
        </form>
        <a 
          class="btn clickable" 
          href="#" 
          onClick={
            ()=>{
              this.props.onClick(this.state.cityname)
              this.setState({cityname:""})
            }
          }
        >
        <FontAwesomeIcon icon={faPlus} /></a>
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
          <DeleteButton onClick={this.props.onClick} id={this.props.id}/>
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

  onClick = () =>{
    console.log(this.props.id)
    let id = this.props.id
    this.props.onClick(id)
  }

  render(){
    return(
      <a class="btn clickable" href="#" onClick={this.onClick}><FontAwesomeIcon icon={faMinus} /></a>
      )
  }
}

export default App;
