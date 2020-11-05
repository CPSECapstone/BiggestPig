import React, { useEffect, useState, Component } from 'react';
import { render } from 'react-dom';
import FormGenerator from './form';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import '../site.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Input from "@material-ui/core/Input";

let dummyApi = [{"name":"hello", "default":"hello again"}, {"name":"bad", "default":"cant change this"}];

export default function App() {
    const [response, setResponse] = useState('');
    const [post, setPost] = useState('');
    const [responseToPost, setResponseToPost] = useState('');

    useEffect(() => {
        callApi()
            .then(resp => setResponse(resp.express))
            .catch(err => console.log(err));
    });

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

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

    const classes = useStyles();

    return (
        <div className='centered'>
            <p>
                Welcome to CloudHaven
            </p>
            <p>{response}</p>
            <form onSubmit={handleSubmit}  className={classes.root} noValidate autoComplete="off">
                <label htmlFor='FormInput'>
                    <strong>Post to Server: </strong>
                </label>
                <div>
                    <TextField
                        id="filled-basic"
                        label="Username"
                        variant="filled"
                        required={true}
                        onChange={user => setPost(user.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                        required={true}
                        onChange={pass => setPost(pass.target.value)}
                    />
                </div>

                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
            <p>{responseToPost}</p>
        </div>
    );
}