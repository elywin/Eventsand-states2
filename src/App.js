import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
 //create state
 constructor(props){
   super(props);
   this.state = {name:"who"};
 }
//method to update state
 handleClick(name){
    this.setState({name:name});
 }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> <code>Change value when button is clicked</code>  </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    <h1>Hello, {this.state.name} !</h1>
       <div className="btn">
         {/* call method when button is clicked to update state */}
        <button onClick={()=> {this.handleClick('Michael')}} >Michael</button>
        <button onClick={()=> {this.handleClick('Elywin')}}>Elywin</button>
        </div>
      </header>
    </div>

    );
  }
}

export default App;
