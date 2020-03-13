import React from "react";
import { Form, Field } from "react-final-form";

const RegisterForm = props => {
  return (
    <Form
      onSubmit={values => console.log(values)}
      validate={values => {
        const errors = {};

        if (values.password !== values.confirmPassword)
          errors.confirmPassword = "Passwords are not equal";

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="modal-signUp__form">
          <Field name="email">
            {({ input, meta }) => (
              <div className="modal-signUp__input-wrap input-wrap">
                <i className="fa fa-user input-user" aria-hidden="true"></i>
                <input
                  {...input}
                  type="email"
                  className="modal-signIn__input modal-input"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div className="modal-signUp__input-wrap input-wrap">
                <i className="fa fa-lock input-lock" aria-hidden="true"></i>
                <input
                  {...input}
                  type="password"
                  className="modal-signIn__input modal-input"
                  name="password"
                  placeholder="Password"
                  minLength={8}
                  required
                />
              </div>
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
                    required
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

export default RegisterForm;
