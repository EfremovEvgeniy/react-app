import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.scss";

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

export default Dialog;
