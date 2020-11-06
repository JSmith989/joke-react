import React, { Component } from 'react';
import jokeShape from '../../helpers/propz/jokeShape';

export default class Joke extends Component {
  static propTypes = {
    jokes: jokeShape,
  };

  state = {
    punchline: [],
  };

  getThePunchline = () => {
    this.setState({
      punchline: this.props.joke.punchline,
    });
  };

  updateJokeBtn = () => {
    this.setState({
      punchline: !this.state.punchline,
    });
  };

  render() {
    const { joke } = this.props;
    const { punchline } = this.state;

    return (
      <div className='card' id={joke.id}>
          <h1> {joke.setup}</h1>
          <div className='card-footer'>
            {punchline ? (
              <>
                <button
                  className='btn btn-success'
                  onClick={this.updateJokeBtn}
                >
                  Punchline
                </button>
              </>
            ) : (
              <>
              <h3>{joke.punchline}</h3>
              </>
            )}
          </div>
      </div>
    );
  }
}
