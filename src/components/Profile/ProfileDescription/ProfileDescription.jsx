import React from "react";
import styles from "./ProfileDescription.module.scss";

const ProfileDescription = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.ava}>
        <img src={props.avaUrl} alt="avatar" />
      </div>
      <div className={styles.description}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default ProfileDescription;
