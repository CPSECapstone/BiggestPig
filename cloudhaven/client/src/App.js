import React, { Component } from 'react';

import './site.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(resp => this.setState({ response: resp.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className='centered'>
        <p>
          Welcome to CloudHaven
        </p>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='FormInput'>
            <strong>Post to Server: </strong>
          </label>
          <input
            id='FormInput'
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;