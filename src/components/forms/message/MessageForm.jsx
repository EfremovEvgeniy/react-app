import { reduxForm, Field } from "redux-form";
import React from "react";
import styles from "./../SimpleForm.module.scss";
import {
  requiredField,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { TextArea } from "../../Common/FormsControls/FormControl";

const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.new}>
      <Field
        component={TextArea}
        name="newMessageBody"
        placeholder="Put your message here"
        validate={[requiredField, maxLength100]}
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
