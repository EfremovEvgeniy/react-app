import React from "react";
import { connect } from "react-redux";
import { loginUser } from "./../../redux/auth-reducer";
import styles from "./Login.module.scss";
import ReduxLoginForm from "../forms/login/LoginForm";

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.userId,
    login: state.auth.userId,
    isAuth: state.auth.isAuth,
    isCurrentUserSetted: state.auth.isCurrentUserSetted,
    currentUser: state.auth.currentUser,
  };
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData.Login, formData.Password, formData.rememberMe);
  };
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
