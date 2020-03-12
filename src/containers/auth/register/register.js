import React from "react";
import { Link } from "react-router-dom";
import RegisterCheckbox from "../../../components/register/registerCheckbox/registerCheckbox";
import RegisterInfoBox from "../../../components/register/registerInfoBox/registerInfoBox";
import RegisterForm from "../../../components/register/registerForm/registerForm";

class Register extends React.Component {
  state = {
    currentType: "Player"
  };

  render() {
    const { currentType } = this.state;

    return (
      <div className="modal-signUp">
        <header className="modal-signUp__header">
          <RegisterCheckbox
            changeType={type => this.setState({ currentType: type })}
            type={currentType}
          />
          <RegisterInfoBox type={currentType} />
        </header>
        <RegisterForm />
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
