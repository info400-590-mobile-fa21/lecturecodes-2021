import React from 'react';
import './App.css';

class App extends React.Component {

  state={
    weatherObject:null
  }


  getWeather = async()=>{
    let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=4acd6f48610c97f8c4c409daa616bcb3&units=imperial")
    let result = await response.json()

    // console.log(result.main.temp)
    // this.setState({weatherObject:result})

    return result
  }

  componentDidMount(){

    // this.getWeather()
    this.getWeather()
    .then(result => {
      console.log(result.main.temp)
      this.setState({weatherObject:result})
    })

  }

  render(){

    let temperature = 70
    if (this.state.weatherObject)
      temperature = this.state.weatherObject.main.temp

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Current temperature: {temperature} F
          </p>
        </header>
      </div>
    );
  }
}

export default App;
