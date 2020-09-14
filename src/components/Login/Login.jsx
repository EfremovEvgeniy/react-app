import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "./../../redux/auth-reducer";
import styles from "./Login.module.scss";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"Login"}
          component={"input"}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          name={"Password"}
          component={"input"}
          type="text"
          placeholder={"Password"}
        />
      </div>
      <div>
        <Field name={"RememberMe"} component={"input"} type="checkbox" />
        <label>remember me</label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

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

const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);

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
