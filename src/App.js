import React, { Component } from 'react';
import './App.css';
import { GenerateQoutes } from './components/qoutes-generator'

class App extends Component {
  render() {

    const Qoutes = ['Oyelola', 'Toyin', 'Aliu', 'Samuel', 'Olawore', 'Oladipupo', 'Oladayo', 'Olugbenga', 'Abimbola', 'Lawumi']

    const generateIndex = () => {
      let randIndex = Math.floor(Math.random() * 10)
      return randIndex
    }
    return (
      <div className="App">
        <GenerateQoutes qoutes={Qoutes[generateIndex()]} />
      </div>
    );
  }

}

export default App;
