import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';
import Joke from '../Setup';

class JokeCorral extends Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    jokeData.getJokes().then((resp) => {
      this.setState({
        jokes: resp,
      });
    });
  }

  render() {
    const { jokes } = this.state;

    const renderJokeToDom = () => <Joke key={jokes.id} joke={jokes}/>;

    return (
      <div className='d-flex flex-wrap'>
        {renderJokeToDom()}
      </div>
    );
  }
}

export default JokeCorral;
