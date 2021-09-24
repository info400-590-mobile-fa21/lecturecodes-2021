import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  state={
    //state object for the photo objects array
    photoObjects:[]
    // imgSrc:[],
    // title:[],
    
    // state object for img source
    // imgSrc:"abc",
    // state object for title
    // title:"first image"

  }

  getNewPhoto = (newSource) =>{

    console.log("getNewPhoto")

    // for setting new imgsrc and title
    // this.setState({
    //   // imgSrc: "def",
    //   title:"random image"
    // })


    // for adding a new photo object to the state object array
    let newPhotoObject={
      imgSrc:newSource,
      title:"newTitle"
    }

    this.setState(prevState=>(
      {photoObjects: [...prevState.photoObjects, newPhotoObject]}
    ))
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">

        {this.state.photoObjects.length}
        {this.state.photoObjects.map(photo=> {
          return(
            <div>
              <Photo photoSrc={photo.imgSrc} />
              <Caption captionTitle={photo.title} />
            </div>
          )})}

          <RandomButton onButtonClick={()=>this.getNewPhoto("https://assets.iu.edu/brand/3.2.x/trident-large.png")}/>
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

export default App;
