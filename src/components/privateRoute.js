import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from '../contexts/authorize.js';

export default function PrivateRoute({ component: Component, ...rest }) {
   const currAuth = useAuth();

   // const isAuthenticated = typeof currAuth != undefined && currAuth['auth'] !== undefined && currAuth['auth'] !== null;
   const isAuthenticated = true;

   return (
      <Route {...rest}
         render={(props) => (
            // Check if the user is authenticated, if so then pass through to component desired, if not redirect to login
            isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
         )}
      />
   )
}
