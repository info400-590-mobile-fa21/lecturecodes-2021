import React,{useState, useEffect, useContext} from 'react';
import storm from './images/storm.png';
import cloudy from './images/cloudy.png';
import './index.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AppContext = React.createContext()

class App extends React.Component{

  handleClick = () =>{
    alert("clicked!")
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <AddPanel />
          <AppContext.Provider 
            value={{
              color: "purple",
              onClick:this.handleClick
            }}>
            <CityPanel city="Bloomington" weather={storm} temp="92" />
            <CityPanel city="Seatle" weather={cloudy} temp="88" />
          </AppContext.Provider>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <AddPanel />
//         <ColorContext.Provider value="purple">
//           <CityPanel city="Bloomington" weather={storm} temp="92" />
//           <CityPanel city="Seatle" weather={cloudy} temp="88" />
//         </ColorContext.Provider>
//       </header>
//     </div>
//   );
// }

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



// class CityPanel extends React.Component{

//   state={
//     show:true,
//     status:""
//   }

//   displayWeather = () =>{
//     this.setState({show: !this.state.show})
//   }

//   componentDidMount(){
//     this.setState({status:"ready"})
//   }

//   render(){
//     return(
//       <div class="panel-body">
//           {this.state.status}
//           <Caption city={this.props.city}/>
//           {this.state.show?<WeatherIcon weather={this.props.weather} />:null}
//           <Temperature temp={this.props.temp}/>
//           {/*<DeleteButton onClick={this.displayWeather}/>*/}
//           <DeleteButton />
//         </div>
//       )
//   }
// }

function CityPanel(props){

  const [show, setShow] = useState(true)
  const [status, setStatus] = useState("")

  // useEffect(() =>{
  //   alert("updated")
  // },[show])

  return(
    <div class="panel-body">
      {status}
      <Caption city={props.city}/>
      {show?<WeatherIcon weather={props.weather} />:null}
      <Temperature temp={props.temp}/>
      <DeleteButton onClick={()=>setShow(!show)}/>
    </div>
  )
}

class Temperature extends React.Component{
  static contextType = AppContext
  render(){
    return(
      <span style={{color:this.context.color}}>{this.props.temp}F</span>
      )
  }
}

// class Caption extends React.Component{
//   static contextType = AppContext
//   render(){
//     return(
//       <div class="caption-display">
//         <span style={{color:this.context.color}}>{this.props.city}</span>
//       </div>
//       )
//   }
// }

function Caption(props){

  const context = useContext(AppContext)
  return(
    <div class="caption-display">
      <span style={{color:context.color}}>{props.city}</span>
    </div>
  )
}

class WeatherIcon extends React.Component{
  render(){
    return(
      <img class="weather-icon" src={this.props.weather}></img>
      )
  }
}

// class DeleteButton extends React.Component{
//   static contextType = AppContext
//   render(){
//     return(
//       // <a class="btn clickable" href="#" onClick={this.props.onClick}><FontAwesomeIcon icon={faMinus} /></a>
//       <a class="btn clickable" href="#" onClick={this.context.onClick}><FontAwesomeIcon icon={faMinus} /></a>
//       )
//   }
// }

function DeleteButton(props){

  const context = useContext(AppContext)
  return(
  // <a class="btn clickable" href="#" onClick={props.onClick}><FontAwesomeIcon icon={faMinus} /></a>
  <a class="btn clickable" href="#" onClick={context.onClick}><FontAwesomeIcon icon={faMinus} /></a>
  )
}

export default App;
