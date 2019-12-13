import React from 'react';
import './App.css';
import SimpleEvents from './SimpleEvents';
// import StateInAction from './StateInAction';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SimpleEvents />
      </div>
    );
  }
}

export default App;
