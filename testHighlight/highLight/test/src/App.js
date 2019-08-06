import React, { Component } from 'react';
import './App.css';
import Testlight from './components/testlight'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Testlight />
        </header>
      </div>
    );
  }
}
export default App;
