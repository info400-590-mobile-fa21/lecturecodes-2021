import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state={
    title:"Old Title"
  }

  changeTitle = (newTitle) =>{
    this.setState({title: newTitle})
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink url="http:/reactjs.com" appTitle={this.state.title} onAppClick={this.changeTitle}/>
          <a onClick={()=>this.changeTitle("new App title")}>click me inside the app</a>
        </header>
      </div>
    );
  }
}

class Photo extends React.Component{
  render(){
    return(
      <img src={this.props.photoSrc} className="App-logo" alt="logo" />
      )
  }
}

class Caption extends React.Component{
  render(){
    return(
      <span>{this.props.captionTitle}</span>
      )
  }
}

class RandomButton extends React.Component{
  render(){
    return(
      <a onClick={this.props.onButtonClick}>random button</a>
      )
  }
}
class AppLink extends React.Component{

  render(){
    return(
      <div>
        <a
          className="App-link"
          href={this.props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
        <TextTitle subTitle={this.props.appTitle} onTextTitleClick={this.props.onAppClick}/>
      </div>
    )
  }
}

class TextTitle extends React.Component{

  state={
    stateTextTitle:"State text Title"
  }
  render(){
    return(
      <div>
        <span>{this.props.subTitle}</span>
        <br/>
        <a onClick={()=>this.props.onTextTitleClick(this.state.stateTextTitle)}>click me inside TextTitle</a>
      </div>
      )
  }
}

function AppLink(props){
  return(
    <a
      className="App-link"
      href={props.ur}
      target="_blank"
      rel="noopener noreferrer"
    >
    Learn React
    </a>
    )
}

export default App;
