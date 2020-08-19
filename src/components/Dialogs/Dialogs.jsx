import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.scss";

const Dialog = (props) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.ava}>
        <img src={props.avaUrl} alt="avatar" />
      </div>
      <div className={styles.customer}>
        <NavLink to={"/dialogs/" + props.id} href="#">
          <span>{props.name}</span>
        </NavLink>
      </div>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={styles.message}>
      <p>{props.text}</p>
    </div>
  );
};

const Dialogs = (props) => {
  let dialogs = [
    {
      id: 1,
      name: "Efrem",
      avaUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
    },
    {
      id: 2,
      name: "Artur",
      avaUrl:
        "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
    },
    {
      id: 3,
      name: "Oleg",
      avaUrl:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png",
    },
  ];

  let dialogsElements = dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl} />
  ));

  let messages = [
    { id: 1, text: "Hi" },
    { id: 2, text: "Yo" },
    { id: 3, text: "Privet" },
  ];

  let messagesElements = messages.map((m) => (
    <Message text={m.text} id={m.id} />
  ));

  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
