import { reduxForm, Field } from "redux-form";
import React from "react";
import styles from "./../SimpleForm.module.scss";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.new}>
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Put your message here"
      />
      <button>
        <span>Send message</span>
      </button>
    </form>
  );
};

const ReduxMessageForm = reduxForm({
  form: "addMessage",
})(MessageForm);

export default ReduxMessageForm;
