import React, { Component } from 'react';
import jokeShape from '../../helpers/propz/jokeShape';

export default class Joke extends Component {
    static propTypes = {
      joke: jokeShape,
    }

    state = {
      isBusy: this.props.joke.isBusy,
    };

  updateJokeBtn = () => {
    this.setState({
      isBusy: !this.state.isBusy,
    });
  };

  render() {
    const { joke } = this.props;
    const { isBusy } = this.state;

    return (
      <div className='joke col-3' id={joke.id}>
        <div className='card'>
          <div className='card-body'>
            <p className='card-text'> {joke.setup}</p>
            <p className='card-text'>{joke.punchline}</p>
          </div>
          <div className='card-footer'>
            {isBusy ? (
              <>
                <button className='btn btn-success' onClick={this.updateJokeBtn}>Get a Joke</button>
              </>
            ) : (
              <button className='btn btn-danger' onClick={this.updateJokeBtn}>Get Punchline</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
