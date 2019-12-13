import React from 'react';
import './App.css';
// import SimpleEvents from './SimpleEvents';
// import StateInAction from './StateInAction';
import EventAndState from './EventAndState';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <EventAndState />
      </div>
    );
  }
}

export default App;
