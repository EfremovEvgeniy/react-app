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
  let dialogsData = [
    { id: 1, name: "Efrem" },
    { id: 2, name: "Artur" },
    { id: 3, name: "Oleg" },
  ];
  let messagesData = [
    { id: 1, text: "Hi" },
    { id: 2, text: "Yo" },
    { id: 3, text: "Privet" },
  ];

  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          <Dialog
            name="Efrem"
            id="1"
            avaUrl="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
          />
          <Dialog
            name="Artur"
            id="2"
            avaUrl="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
          />
          <Dialog
            name="Oleg"
            id="3"
            avaUrl="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png"
          />
        </div>
        <div className={styles.messages}>
          <Message text="Hi" id="1" />
          <Message text="Yo" id="2" />
          <Message text="Privet" id="3" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
