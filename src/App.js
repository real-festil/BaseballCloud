import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Auth from "./containers/auth/auth";
import Profile from "./containers/profile/profile";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import history from "./utils/history";
import ApolloWrapper from "./utils/Apollo";
import { connect } from "react-redux";
import "./styles/css/style.css";

function App(props) {
  return (
    <div className="main">
      <Router history={history}>
        <Header />
        <Route exact path="/">
          <Redirect to="/registration" />
        </Route>
        <Switch>
          <Route exact path={"/(registration|login)/"}>
            <Auth />
          </Route>
          <Route path="/profile">
            {props.isAuth ? (
              <ApolloWrapper>
                <Profile />
              </ApolloWrapper>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.user.headers
  };
};

export default connect(mapStateToProps)(App);
