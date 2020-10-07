import React, { Component } from 'react';
import './App.css';
import CircleSelector from './component/CircleSelector';
import Circles from './component/Circles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;