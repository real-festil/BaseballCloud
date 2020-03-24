import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Auth from "./containers/auth/auth";
import Profile from "./containers/profile/profile";
import Leaderboard from "./containers/leaderboard/leaderboard";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import history from "./utils/history";
import ApolloWrapper from "./utils/Apollo";
import { connect } from "react-redux";
import "./styles/css/style.css";

function App(props) {
  const { isAuth } = props;

  return (
    <div className="main">
      <Router history={history}>
        <ApolloWrapper>
          <Header isAuth={isAuth} />
        </ApolloWrapper>
        <Route exact path="/">
          {isAuth ? (
            <Redirect to="/profile" />
          ) : (
            <Redirect to="/registration" />
          )}
        </Route>
        <Switch>
          <Route exact path={"/(registration|login)/"}>
            {isAuth ? <Redirect to="/profile" /> : <Auth />}
          </Route>
          <Route path="/profile">
            {isAuth ? (
              <ApolloWrapper>
                <Profile />
              </ApolloWrapper>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/leaderboard">
            {isAuth ? (
              <ApolloWrapper>
                <Leaderboard />
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
