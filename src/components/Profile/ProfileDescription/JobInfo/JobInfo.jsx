import React from "react";
import styles from "./../ProfileDescription.module.scss";

const JobInfo = (props) => {
  return (
    <div className={styles.jobInfo}>
      <p className={styles.title}>Job Info</p>
      <p>{props.lookingForAJob ? "Open to work" : "Don't search work"}</p>
      <i>{props.lookingForAJobDescription}</i>
    </div>
  );
};

export default JobInfo;
