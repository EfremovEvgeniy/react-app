import React from "react";
import { reduxForm, Field } from "redux-form";

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

const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    // console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
