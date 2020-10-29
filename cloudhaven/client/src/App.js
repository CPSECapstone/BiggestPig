import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import './site.css';

export default function App() {
  const [response, setResponse] = useState('');
  const [post, setPost] = useState('');
  const [responseToPost, setResponseToPost] = useState('');

  useEffect(() => {
    callApi()
      .then(resp => setResponse(resp.express))
      .catch(err => console.log(err));
  })

  const callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: post }),
    });
    const body = await response.text();

    setResponseToPost(body);
  };

    return (
      <div className='centered'>
        <p>
          Welcome to CloudHaven
        </p>
        <p>{response}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='FormInput'>
            <strong>Post to Server: </strong>
          </label>
          <input
            id='FormInput'
            type="text"
            value={post}
            onChange={e => setPost(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseToPost}</p>
      </div>
    );
}