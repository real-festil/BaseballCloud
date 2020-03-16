import React from "react";
import Register from "./register/register";
import Login from "./login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Auth extends React.Component {
  render() {
    return (
      <main className="login-page">
        <h1 className="visually-hidden">BaseballCloud app</h1>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Register />
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default Auth;
