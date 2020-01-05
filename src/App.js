import React,{ Component } from 'react';
import './App.css';

class Aggregate extends Component{
  render(){
    return(
      <div style={{width:"40%", display:"inline-block"}}>
        <h2>Number Text</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text" />
        Filter
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{width: "25%", display:"inline-block"}}>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}


function App() {
  let name="ram";
  // let headerStyle={color:"red", 'font-size':"60px"}
    return (
    <div className="App">
      <h1>Title</h1>
      <h1 style={{color:"green","font-size":"40px"}}>Hello,{name} </h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;
