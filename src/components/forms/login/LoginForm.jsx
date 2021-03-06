import React from "react";
import { reduxForm, Field } from "redux-form";
import styles from "./LoginForm.module.scss";
import { requiredField } from "../../../utils/validators/validators";
import { Input } from "../../Common/FormsControls/FormControl";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div className={styles.inputWrapper}>
        <Field
          name="email"
          component={Input}
          type="text"
          placeholder="Login"
          validate={[requiredField]}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="Password"
          validate={[requiredField]}
        />
      </div>
      {/* <div className={styles.checkboxWrapper}>
        <Field name="RememberMe" component={Input} type="checkbox" />
        <label>remember me</label>
      </div> */}
      {error && <div className={styles.summaryError}>{error}</div>}
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
