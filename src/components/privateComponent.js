import React from 'react';

import {useAuth} from '../contexts/authorize.js';

export default function PrivateComponent({component: Component, ...rest}) {
  const currAuth = useAuth();

  // TODO improve authentication logic and expand to authorization
  // eslint-disable-next-line no-unused-vars
  const isAuthenticated = (typeof currAuth != undefined &&
      currAuth['auth'] !== null &&
      currAuth['auth'] !== undefined &&
      // Just check if it's a hash, can elaborate further at a later time
      currAuth['auth'].length === 64);

  return (
      true ? <Component {...rest} /> : null
  );
}
