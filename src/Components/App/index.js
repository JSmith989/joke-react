import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';
import Joke from '../Setup';

class JokeCorral extends Component {
  state = {
    jokes: [],
  };

  getAJoke = () => {
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
      <div className='d-flex justify-content-center'>
          <div className='card w-75 p-3'>
          <img
            className='card-img-top'
            src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
            alt='Card cap'
          ></img>
          {this.state.jokes.id ? <div>{renderJokeToDom()}</div> : <></>}
        <button className="btn btn-primary" id="getAJoke" onClick={this.getAJoke}>Click for Joke</button>
      </div>
      </div>
    );
  }
}

export default JokeCorral;
