import React from 'react';
import background from './background.jpg';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <img src={background} className="App-background"/>
      </div>
    );
  }

}

export default App;
