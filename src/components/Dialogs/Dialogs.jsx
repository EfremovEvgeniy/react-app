import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.scss";

const Dialogs = (props) => {
  return (
    <div>
      <div className={styles.title}>
        <p>Dialogs</p>
      </div>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          <div className={styles.dialog}>
            <div className={styles.ava}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                alt="avatar"
              />
            </div>
            <div className={styles.customer}>
              <NavLink to="/dialogs/1" href="#">
                Efrem
              </NavLink>
            </div>
          </div>
          <div className={styles.dialog}>
            <div className={styles.ava}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                alt="avatar"
              />
            </div>
            <div className={styles.customer}>
              <NavLink to="/dialogs/2" href="#">
                Oleg
              </NavLink>
            </div>
          </div>
          <div className={styles.dialog}>
            <div className={styles.ava}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                alt="avatar"
              />
            </div>
            <div className={styles.customer}>
              <NavLink to="/dialogs/5" href="#">
                Sergey
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>
            <p>Hi</p>
          </div>
          <div className={styles.message}>
            <p>Who</p>
          </div>
          <div className={styles.message}>
            <p>Where</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
