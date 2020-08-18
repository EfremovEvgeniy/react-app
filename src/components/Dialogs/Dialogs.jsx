import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.scss";

const Dialog = (props) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.ava}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
          alt="avatar"
        />
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
  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          <Dialog name="Efrem" id="1" />
          <Dialog name="Artur" id="2" />
          <Dialog name="Oleg" id="3" />
        </div>
        <div className={styles.messages}>
          <Message text="Hi" />
          <Message text="Yo" />
          <Message text="Privet" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
