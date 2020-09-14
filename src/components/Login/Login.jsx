import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "./../../redux/auth-reducer";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"Login"} component={"input"} placeholder={"Login"} />
      </div>
      <div>
        <Field name={"Password"} component={"input"} placeholder={"Password"} />
      </div>
      <div>
        <Field name={"RememberMe"} component={"input"} type={"checkbox"} />
        remember me
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
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(mapStateToProps, {
  loginUser,
})(Login);
