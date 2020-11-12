import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from '../contexts/authorize.js';

export default function PrivateRoute({ component: Component, ...rest }) {
   const currAuth = useAuth();

   const isAuthenticated = (typeof currAuth != undefined 
      && currAuth['auth'] !== null 
      && currAuth['auth'] !== undefined 
      // Just check if it's a hash, can elaborate further at a later time
      && currAuth['auth'].length === 64);

   return (
      <Route {...rest}
         render={(props) => (
            // Check if the user is authenticated, if so then pass through to component desired, if not redirect to login
            isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
         )}
      />
   )
}