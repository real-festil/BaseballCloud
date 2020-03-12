import React from "react";
import Register from "./register/register";
import Login from "./login/login";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

class Auth extends React.Component {
  render() {
    return (
      <main className="login-page">
        <h1 className="visually-hidden">BaseballCloud app</h1>
        <Router>
          <Route exact path="/">
            <Redirect to="/registration" />
          </Route>
          <Switch>
            <Login path="/login" />
            <Register path="/registration" />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default Auth;
