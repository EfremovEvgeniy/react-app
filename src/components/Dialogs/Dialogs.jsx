import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message text={m.text} id={m.id} />
  ));

  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogsWrapper}>
        <div className={styles.dialogItems}>{dialogsElements}</div>
        <div className={styles.messageItems}>{messagesElements}</div>
      </div>
      <NewMessage />
    </div>
  );
};

export default Dialogs;
