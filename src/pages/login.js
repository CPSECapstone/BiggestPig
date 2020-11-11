import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

import axios from 'axios';
import crypto from 'crypto';

import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { useAuth } from '../contexts/authorize.js';

export default function Login() {
   const [loggedIn, setLoggedIn] = useState(false);

   const [errorMsg, setErrorMsg] = useState("");

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { setAuth } = useAuth();

   const useStyles = makeStyles((theme) => ({
      root: {
         '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
         },
      },
   }));

   const classes = useStyles();

   function postLogin(event) {
      // Don't refresh homie
      event.preventDefault();

      if (email.length === 0) {
         setErrorMsg('Please Enter an Email');
         return;
      }

      var emailPattern = new RegExp(/\S+@\S+\.\S+/);
      if (!emailPattern.test(email)) {
         setErrorMsg('Incorrectly formatted email, must contain \'@\' and \'.\'');
         return;

      }

      if (password.length === 0) {
         setErrorMsg('Please Enter a Password');
         return;
      }

      const hash = crypto.createHash('sha256');
      hash.update(password);
      const hashedPass = hash.digest('hex');

      // Dr. Da Silva requests we use Axios
      axios.post("/api/auth", {
         email,
         hashedPass
      }).then(result => {

         if (result.status === 200) {
            setAuth(result.data.valid);
            setLoggedIn(true);
            
         } else {
            setErrorMsg('Incorrect Email or Password');
         }

      }).catch(e => {
         setErrorMsg('Bad API call');
      });
   }


   if (loggedIn) {
      return <Redirect to='/home' />

   } else {
      return (
         <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
            <h2>Welcome to CloudHaven</h2>
            <form
               onSubmit={postLogin}
               className={classes.root}
               noValidate
               autoComplete="off"
               style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
               <div>
                  <TextField
                     id="filled-basic"
                     label="Email"
                     variant="filled"
                     required={true}
                     onChange={userEntry => setEmail(userEntry.target.value)}
                  />
               </div>
               <div>
                  <TextField
                     id="filled-basic"
                     label="Password"
                     variant="filled"
                     type="password"
                     required={true}
                     onChange={passEntry => setPassword(passEntry.target.value)}
                  />
               </div>

               <Button type="submit" variant="contained" color="primary" style={{ alignSelf: 'center' }}>Submit</Button>
            </form>
            { errorMsg.length > 0 && <p style={{color: 'red'}}>{errorMsg}</p> }
         </div>
      );
   }
}