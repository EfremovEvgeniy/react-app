import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message text={m.text} id={m.id} key={m.id} />
  ));

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogsWrapper}>
        <div className={styles.dialogItems}>{dialogsElements}</div>
        <div className={styles.messageItems}>{messagesElements}</div>
      </div>
      <NewMessage
        updateNewMessageText={props.updateNewMessageText}
        addMessage={props.addMessage}
        newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
