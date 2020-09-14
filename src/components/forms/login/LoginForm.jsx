import React from "react";
import { reduxForm, Field } from "redux-form";
import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.loginForm}>
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
const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);

export default ReduxLoginForm;
