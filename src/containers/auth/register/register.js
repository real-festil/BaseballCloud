import React from "react";
import { Link } from "react-router-dom";
import RegisterCheckbox from "../../../components/register/registerCheckbox/registerCheckbox";
import RegisterInfoBox from "../../../components/register/registerInfoBox/registerInfoBox";
import RegisterForm from "../../../components/register/registerForm/registerForm";
import { register } from "../../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Register extends React.Component {
  state = {
    currentType: "player"
  };

  onSubmit = values => {
    this.props.register({
      email: values.email,
      password: values.password,
      password_confirmation: values.confirm_password,
      role: this.state.currentType
    });
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
        <RegisterForm
          onSubmit={values => this.onSubmit(values)}
          error={this.props.error}
        />
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

Register.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    error: state.auth.user.registerError
  };
};

export default connect(mapStateToProps, { register })(Register);
