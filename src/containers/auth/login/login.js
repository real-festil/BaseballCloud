import React from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends React.Component {
  onSubmit = values => {
    this.props.login({ email: values.email, password: values.password });
  };

  render() {
    return (
      <div className="modal-signIn">
        <header className="modal-signIn__header">
          <h2 className="modal-signIn__title">Welcome to BaseballCloud</h2>
          <p className="modal-signIn__desc">Sign into your account here:</p>
        </header>

        <Form
          onSubmit={values => this.onSubmit(values)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="modal-signIn__form">
              <Field name="email">
                {({ input }) => (
                  <div className="modal-signIn__input-wrap input-wrap">
                    <i className="fa fa-user input-user" aria-hidden="true"></i>
                    <input
                      {...input}
                      className="modal-signIn__input modal-input"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input }) => (
                  <>
                    <div className="modal-signIn__input-wrap input-wrap">
                      <i
                        className="fa fa-lock input-lock"
                        aria-hidden="true"
                      ></i>
                      <input
                        {...input}
                        type="password"
                        className="modal-signIn__input modal-input"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    {this.props.error && (
                      <p style={{ color: "red" }}>{this.props.error}</p>
                    )}
                  </>
                )}
              </Field>
              <button type="submit" className="modal-submit">
                Sign In
              </button>
            </form>
          )}
        />

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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    error: state.auth.user.loginError
  };
};

export default connect(mapStateToProps, { login })(Login);
