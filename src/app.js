import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from './components/providers.js';
import {Header} from './components/defaultComponents';
import Home from './pages/home';
import Demo2 from './pages/demo2';
import Login from './pages/login';
import FormPropsTextFields from './pages/demo';
import PrivateRoute from './components/privateRoute.js';
import PrivateComponent from './components/privateComponent.js';
import {AuthContext} from './contexts/authorize.js';


export default function App() {
  const currAuth = JSON.parse(sessionStorage.getItem('auth'));
  const [auth, setAuth] = useState(currAuth);

  const updateAuth = (userLogin) => {
    if (userLogin) {
      sessionStorage.setItem('auth', JSON.stringify(userLogin));
      setAuth(userLogin);
    } else {
      sessionStorage.removeItem('auth');
      setAuth();
    }
  };

  return (
    // Pass into our context the current state of authentication
    // with ability to update it
    <AuthContext.Provider value={{auth, setAuth: updateAuth}}>
      <Router>
        <Provider>
          <PrivateComponent component={Header} />
          <Switch>
            <PrivateRoute path="/demo" component={FormPropsTextFields} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/demo2" component={Demo2} />
            <Route path="/login" component={Login} />
          </Switch>
        </Provider>
      </Router>
    </AuthContext.Provider>
  );
}
