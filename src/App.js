import React from 'react';
import './App.css';
import StateInAction from './StateInAction';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>State Check~</h1>
        <StateInAction name={'Ivan'} />
      </div>
    );
  }
}

export default App;
