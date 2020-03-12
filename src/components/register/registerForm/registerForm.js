import React from "react";
import { Form, Field } from "react-final-form";

const RegisterForm = props => {
  return (
    <Form
      onSubmit={() => props.onSubmit()}
      validate={values => {
        const errors = {};

        if (values.password !== values.confirmPassword)
          errors.confirmPassword = "Password are not equal";
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="modal-signUp__form">
          <div className="modal-signUp__input-wrap input-wrap">
            <Field name="email">
              {({ input, meta }) => (
                <>
                  <i className="fa fa-user input-user" aria-hidden="true"></i>
                  <input
                    type="email"
                    className="modal-signIn__input modal-input"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </>
              )}
            </Field>
          </div>
          <div className="modal-signUp__input-wrap input-wrap">
            <Field name="password">
              {({ input, meta }) => (
                <>
                  <i className="fa fa-lock input-lock" aria-hidden="true"></i>
                  <input
                    type="password"
                    className="modal-signIn__input modal-input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </>
              )}
            </Field>
          </div>
          <div className="modal-signUp__input-wrap input-wrap">
            <Field name="confirmPassword">
              {({ input, meta }) => (
                <>
                  <i className="fa fa-check input-check" aria-hidden="true"></i>
                  <input
                    type="password"
                    className="modal-signIn__input modal-input"
                    placeholder="Confirm Password"
                    required
                  />
                </>
              )}
            </Field>
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
      )}
    />
  );
};

export default RegisterForm;
