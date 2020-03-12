import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <div className="modal-signUp">
        <header className="modal-signUp__header">
          <div className="modal-signUp__toggle-block">
            <button className="modal-signUp__btn modal-signUp__btn--player modal-btn-checked">
              <span className="modal-signUp__check-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M6.116 10.884l5.482-5.482a.566.566 0 0 0 0-.804l-.91-.91a.566.566 0 0 0-.804 0l-4.17 4.17L3.83 5.972a.566.566 0 0 0-.803 0l-.91.91a.566.566 0 0 0 0 .804l3.196 3.197c.223.223.58.223.803 0zM13.714 3v8.571a2.572 2.572 0 0 1-2.571 2.572H2.57A2.572 2.572 0 0 1 0 11.57V3A2.572 2.572 0 0 1 2.571.429h8.572A2.572 2.572 0 0 1 13.714 3z"
                  ></path>
                </svg>
              </span>
              <span className="modal-signUp__btn-label">Sign Up as Player</span>
            </button>
            <button className="modal-signUp__btn modal-signUp__btn--scout">
              <span className="modal-signUp__check-img hide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M6.116 10.884l5.482-5.482a.566.566 0 0 0 0-.804l-.91-.91a.566.566 0 0 0-.804 0l-4.17 4.17L3.83 5.972a.566.566 0 0 0-.803 0l-.91.91a.566.566 0 0 0 0 .804l3.196 3.197c.223.223.58.223.803 0zM13.714 3v8.571a2.572 2.572 0 0 1-2.571 2.572H2.57A2.572 2.572 0 0 1 0 11.57V3A2.572 2.572 0 0 1 2.571.429h8.572A2.572 2.572 0 0 1 13.714 3z"
                  ></path>
                </svg>
              </span>
              <span className="modal-signUp__btn-label">Sign Up as Scout</span>
            </button>
          </div>

          <div className="modal-signUp__toggle-info modal-signUp__toggle-info--player">
            <div className="modal-signUp__toggle-title">Players</div>
            <p className="modal-signUp__toggle-desc">
              Players have their own profile within the system and plan on
              having data collected.
            </p>
          </div>

          <div className="modal-signUp__toggle-info modal-signUp__toggle-info--scout hide">
            <div className="modal-signUp__toggle-title">Scouts</div>
            <p className="modal-signUp__toggle-desc">
              Coaches and scouts can view players in the system but do not have
              their own profile.
            </p>
          </div>
        </header>

        <form action="#" method="POST" className="modal-signUp__form">
          <div className="modal-signUp__input-wrap input-wrap">
            <i className="fa fa-user input-user" aria-hidden="true"></i>
            <input
              type="email"
              className="modal-signIn__input modal-input"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="modal-signUp__input-wrap input-wrap">
            <i className="fa fa-lock input-lock" aria-hidden="true"></i>
            <input
              type="password"
              className="modal-signIn__input modal-input"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="modal-signUp__input-wrap input-wrap">
            <i className="fa fa-check input-check" aria-hidden="true"></i>
            <input
              type="password"
              className="modal-signIn__input modal-input"
              placeholder="Confirm Password"
              required
            />
          </div>
          <p className="modal-signUp__desc">
            By clicking Sign Up, you agree to our
            <a href="#" className="page-link">
              Terms of Service
            </a>{" "}
            and
            <a href="#" className="page-link">
              Privacy Policy
            </a>
            .
          </p>
          <button type="submit" className="modal-submit">
            Sign Up
          </button>
        </form>

        <p className="modal-signUp__singIn-desc">
          Already registered?
          <Link to="/login" className="modal-signUp__signIn-link">
            Sign In
          </Link>
        </p>
      </div>
    );
  }
}

export default Register;
