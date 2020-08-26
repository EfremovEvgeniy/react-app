import React from "react";
import styles from "./User.module.scss";

const User = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ava}>
        <img src={props.avaUrl} alt="ava" />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
          <span>{props.fullName}</span>
          <q>{props.status}</q>
        </div>
        <div className={styles.adress}>
          <div className={styles.city}>
            <span>{props.location.city}</span>
          </div>
          <div className={styles.country}>
            <i>{props.location.country}</i>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        {props.followed ? (
          <button
            onClick={() => {
              props.unfollowUser(props.id);
            }}
          >
            <span>Unfollow</span>
          </button>
        ) : (
          <button
            onClick={() => {
              props.followUser(props.id);
            }}
          >
            <span>Follow</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
