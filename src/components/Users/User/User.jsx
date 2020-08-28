import React from "react";
import styles from "./User.module.scss";
import defaultAva from "./../../../assets/images/default_ava.png";

const User = (props) => {
  let defaultStatus = "I'm all right!";
  let defaultCity = "Moscow";
  let defaultCountry = "Russia";

  return (
    <div className={styles.wrapper}>
      <div className={styles.ava}>
        <img src={props.photos.small || defaultAva} alt="ava" />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
          <span>{props.name}</span>
          <q>{props.status || defaultStatus}</q>
        </div>
        <div className={styles.adress}>
          <div className={styles.city}>
            <span>{defaultCity}</span>
          </div>
          <div className={styles.country}>
            <i>{defaultCountry}</i>
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
