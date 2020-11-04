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
      <div className='col-3' id={joke.id}>
          <h5> {joke.setup}</h5>
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
              <p>{joke.punchline}</p>
                {/* <button className='btn btn-danger' onClick={this.updateJokeBtn}>
                  Get A Joke
                </button> */}
              </>
            )}
          </div>
      </div>
    );
  }
}
