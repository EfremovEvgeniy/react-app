import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import ReduxMessageForm from "../forms/message/MessageForm";

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

export default Dialogs;
