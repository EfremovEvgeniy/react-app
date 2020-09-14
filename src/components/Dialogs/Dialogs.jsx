import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message text={m.text} id={m.id} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogsWrapper}>
        <div className={styles.dialogItems}>{dialogsElements}</div>
        <div className={styles.messageItems}>{messagesElements}</div>
      </div>
      <ReduxMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
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
})(AddMessageForm);

export default Dialogs;
