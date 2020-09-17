import React from "react";
import { connect } from "react-redux";
import { loginUser } from "./../../redux/auth-reducer";
import styles from "./Login.module.scss";
import ReduxLoginForm from "../forms/login/LoginForm";
import { Redirect } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(mapStateToProps, {
  loginUser,
})(Login);
