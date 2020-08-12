import React from "react";
import styles from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.ava}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
          alt="avatar"
        />
      </div>
      <div className={styles.message}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Post;
