import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HOCDemoComponent from "./Components/HOCDemoComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to High Order Component Demo</h1>
        </header>
      </div>
    );
  }
}

export default HOCDemoComponent(App);

// or you can also do this with annotation @HOCDemoComponent

// @HOCDemoComponent
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 Your Render function
//             </div>
//         );
//     }
// }
//
// export default App;