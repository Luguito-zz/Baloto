import React, { Component } from 'react';
import Loteria from './components/Loteria';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Bienvenido al Baloto
        <Loteria/>
      </div>
    );
  }
}
export default App;
