import React, { Component } from 'react';
import './App.css';
import { GenerateQoutes } from './components/qoutes-generator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GenerateQoutes />
        {/* <button onClick={this.GenerateQoutes}>Random Name</button> */}
      </div>
    );
  }

}

export default App;
