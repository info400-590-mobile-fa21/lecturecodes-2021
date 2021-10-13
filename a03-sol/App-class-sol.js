import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component{

  state={
    panels:[],
    weatherObject:null
  }

  componentDidMount(){
    this.addPanel("Bloomington")
    this.addPanel("Tokyo")
  }

  getWeather = async(cityname)=>{
    const response = await fetch("https://api.weatherbit.io/v2.0/current?city=" + cityname + "&key=<apikey>&units=i");
    const result = await response.json();

    this.setState({weatherObject:result})

    console.log(result)
  }

  addPanel = async(cityname) =>{
    console.log(cityname)

    const response = await(this.getWeather(cityname))

    let newPanel ={
      city:cityname,
      // weather:this.state.weatherObject.data[0].weather.description,
      weather: "https://www.weatherbit.io/static/img/icons/" + this.state.weatherObject.data[0].weather.icon + ".png",
      temp:this.state.weatherObject.data[0].temp,
      id:Math.floor(Math.random()*1000),
      onClick:this.removePanel
    }

    this.setState(prevState=>({panels: [...prevState.panels, newPanel]}))
  }

  removePanel=(id)=>{
    console.log(id)

    let newPanels = this.state.panels.filter(item=>item.id !== id)
    this.setState({panels:newPanels})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <AddPanel onClick={this.addPanel}/>
          {this.state.panels.map(panel=><CityPanel {...panel} />)}
        </header>
      </div>
    );
  }
}

class AddPanel extends React.Component{
  state={
    cityname:""
  }

  handleText = (event)=>{
    // console.log(event.target.value)
    this.setState({cityname:event.target.value})
  }

  
  render(){
    return(
      <div class="panel-add">
        <form id='input_form'>
          <input type="text" name="city_text" placeholder="City" id="city_text" value={this.state.cityname} onChange={this.handleText}/>
        </form>
        <a class="btn clickable" href="#" onClick={()=>{this.props.onClick(this.state.cityname);this.setState({cityname:""})}}><FontAwesomeIcon icon={faPlus} /></a>
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
      // <span class="status">{this.props.weather}</span>
      <img class="weather-icon" src={this.props.weather}></img>
      )
  }
}

class DeleteButton extends React.Component{
  render(){
    console.log("delete: " + this.props.id)
    return(
      <a class="btn clickable" href="#" onClick={()=>this.props.onClick(this.props.id)}><FontAwesomeIcon icon={faMinus} /></a>
      )
    }
}

export default App;
