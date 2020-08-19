import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friend.module.scss";

const Friend = (props) => {
  return (
    <div className={styles.friend}>
      <div className={styles.ava}>
        <img src={props.avaUrl} alt="avatar" />
      </div>
      <div className={styles.name}>
        <NavLink to={"/dialogs/" + props.id} href="#">
          <span>{props.name}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Friend;
