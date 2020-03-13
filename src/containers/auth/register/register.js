import React from "react";
import { Link } from "react-router-dom";
import RegisterCheckbox from "../../../components/register/registerCheckbox/registerCheckbox";
import RegisterInfoBox from "../../../components/register/registerInfoBox/registerInfoBox";
import RegisterForm from "../../../components/register/registerForm/registerForm";
import API from "../../../utils/API";

class Register extends React.Component {
  state = {
    currentType: "Player"
  };

  onSubmit = async values => {
    console.log(values.email, values.password);
    try {
      const res = await API.post("/auth", {
        email: values.email,
        password: values.password
      });
      console.log(res);
    } catch (e) {
      console.log(e.response.data.errors.full_messages[0]);
    }
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
        <RegisterForm onSubmit={values => this.onSubmit(values)} />
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
