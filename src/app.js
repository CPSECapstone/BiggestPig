import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "./components/providers.js";
import { Header } from "./components/defaultComponents";

import Home from "./pages/home";
import FormPropsTextFields from "./pages/demo";
// import ProfilePage from "./pages/Profile";
// import EditProfilePage from "./pages/EditProfile";

export default function App() {
  return (
      <Router>
        <Provider>
          <Header />
          <Switch>
            <Route path="/demo">
              <FormPropsTextFields />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Provider>
      </Router>
  );
}
