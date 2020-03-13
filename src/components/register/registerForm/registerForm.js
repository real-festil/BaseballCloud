import React from "react";
import { Form, Field } from "react-final-form";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterForm = props => {
  return (
    <Form
      onSubmit={values => props.onSubmit(values)}
      validate={values => {
        const errors = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (!emailRegex.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Must contain more than 8 characters";
        }
        if (values.password !== values.confirmPassword)
          errors.confirmPassword = "Passwords are not equal";

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="modal-signUp__form">
          <Field name="email">
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
                {meta.touched && meta.error && (
                  <p style={errorStyle}>{meta.error}</p>
                )}
              </>
            )}
          </Field>
          <Field name="password">
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
                {meta.touched && meta.error && (
                  <p style={errorStyle}>{meta.error}</p>
                )}
              </>
            )}
          </Field>
          <Field name="confirmPassword">
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
                  <p style={{ color: "red" }}>{meta.error}</p>
                )}
              </>
            )}
          </Field>
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
      )}
    />
  );
};

const errorStyle = {
  color: "red",
  paddingBottom: "10px"
};

export default RegisterForm;
