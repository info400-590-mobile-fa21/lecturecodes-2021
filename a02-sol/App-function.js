import React,{useState, useEffect} from 'react';
import storm from './images/storm.png';
import cloudy from './images/cloudy.png';
import './index.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App(){

  const [panels, setPanels] = useState([]);


  useEffect(()=>{

    let initialPanels = [{
      city:"Bloomington",
      weather:storm,
      temp: 70,
      id: Math.floor(Math.random() * 1000),
      onClick:removePanel
    },{
      city:"Tokyo",
      weather:storm,
      temp: 70,
      id: Math.floor(Math.random() * 1000),
      onClick:removePanel
    }]

    setPanels(initialPanels)
  },[])


  const addPanel = (newCity)=>{
    let newPanel = {
      city:newCity,
      weather:storm,
      temp: 70,
      id: Math.floor(Math.random() * 1000),
      onClick:removePanel
    }
    
    setPanels([...panels,newPanel])
  }

  const removePanel = (id)=>{
    setPanels(prevPanels => (prevPanels.filter(item => item.id !== id)))
  }

  console.log(panels)
  return (
    <div className="App">
      <header className="App-header">
        <AddPanel onClick={addPanel}/>
        {panels.length}
        {panels.map(item=> (<CityPanel {...item} />))}
      </header>
    </div>
  )
}


function AddPanel(props){

  const [cityname, setCityname] = useState("")

  let getText = (event)=>{
    setCityname(event.target.value)
  }

  return(
    <div class="panel-add">
      <form id='input_form'>
        <input type="text" name="city_text" placeholder="City" id="city_text" onChange={getText} value={cityname}/>
      </form>
      <a 
        class="btn clickable" 
        href="#" 
        onClick={
          ()=>{
            props.onClick(cityname)
            setCityname("")
          }
        }
      >
      <FontAwesomeIcon icon={faPlus} /></a>
    </div>
    )
}

function CityPanel(props){

  return(
    <div class="panel-body">
        <Caption city={props.city}/>
        <WeatherIcon weather={props.weather} />
        <Temperature temp={props.temp}/>
        <DeleteButton onClick={props.onClick} id={props.id}/>
      </div>
    )
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

function DeleteButton(props){

  let onClick = ()=>{
    console.log(props.id)
    let id = props.id
    props.onClick(id)
  }

  return(
    <a class="btn clickable" href="#" onClick={onClick}><FontAwesomeIcon icon={faMinus} /></a>
    )
}

export default App;
