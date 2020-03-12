import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="modal-signIn">
        <header className="modal-signIn__header">
          <h2 className="modal-signIn__title">Welcome to BaseballCloud</h2>
          <p className="modal-signIn__desc">Sign into your account here:</p>
        </header>

        <form action="#" method="POST" className="modal-signIn__form">
          <div className="modal-signIn__input-wrap input-wrap">
            <i className="fa fa-user input-user" aria-hidden="true"></i>
            <input
              type="email"
              className="modal-signIn__input modal-input"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="modal-signIn__input-wrap input-wrap">
            <i className="fa fa-lock input-lock" aria-hidden="true"></i>
            <input
              type="password"
              className="modal-signIn__input modal-input"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="modal-submit">
            Sign In
          </button>
        </form>

        <a href="#" className="modal-signIn__help-link page-link">
          Forgotten password?
        </a>
        <p className="modal-signIn__desc">
          Dont have an account?
          <Link to="/registration" className="modal-signIn__signUp-link">
            Sign Up
          </Link>
        </p>
      </div>
    );
  }
}

export default Login;
