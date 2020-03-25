import React from "react";
import { Form, Field } from "react-final-form";
import PropTypes from "prop-types";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailValidate = value => {
  if (!value) return "Required";
  if (!emailRegex.test(value)) return "Invalid email address";
};

const passwordValidate = value => {
  if (!value) return "Required";
  if (value < 8) return "Must contain more than 8 characters";
};

const confirmPasswordValidate = values => {
  const errors = {};
  if (values.password !== values.confirm_password)
    errors.confirm_password = "Passwords are not equal";
  return errors;
};

const RegisterForm = props => {
  return (
    <Form
      onSubmit={values => props.onSubmit(values)}
      validate={values => confirmPasswordValidate(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="modal-signUp__form">
          <Field name="email" validate={emailValidate}>
            {({ input, meta }) => (
              <>
                <div className="modal-signUp__input-wrap input-wrap">
                  <i className="fa fa-user input-user" aria-hidden="true"></i>
                  <input
                    {...input}
                    className="modal-signIn__input modal-input"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                {meta.modified && meta.error && (
                  <p className="error_text">{meta.error}</p>
                )}
                {meta.modified && props.error && (
                  <p className="error_text">{props.error}</p>
                )}
              </>
            )}
          </Field>
          <Field name="password" validate={passwordValidate}>
            {({ input, meta }) => (
              <>
                <div className="modal-signUp__input-wrap input-wrap">
                  <i className="fa fa-lock input-lock" aria-hidden="true"></i>
                  <input
                    {...input}
                    type="password"
                    className="modal-signIn__input modal-input"
                    name="password"
                    placeholder="Password"
                    minLength={8}
                  />
                </div>
                {meta.modified && meta.error && (
                  <p className="error_text">{meta.error}</p>
                )}
              </>
            )}
          </Field>
          <Field name="confirm_password">
            {({ input, meta }) => (
              <>
                <div className="modal-signUp__input-wrap input-wrap">
                  <i className="fa fa-check input-check" aria-hidden="true"></i>
                  <input
                    {...input}
                    type="password"
                    className="modal-signIn__input modal-input"
                    placeholder="Confirm Password"
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="error_text">{meta.error}</p>
                )}
              </>
            )}
          </Field>
          <p className="modal-signUp__desc">
            By clicking Sign Up, you agree to our{" "}
            <a href="/" className="page-link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/" className="page-link">
              Privacy Policy
            </a>
            .
          </p>
          <button type="submit" className="modal-submit">
            Sign Up
          </button>
        </form>
      )}
    />
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.string
};

export default RegisterForm;
