import React from 'react';
import './App.scss';
import JokeCorral from '../Components/App/index';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h2>Jokes</h2>
        <JokeCorral />
      </div>
    );
  }
}

export default App;
