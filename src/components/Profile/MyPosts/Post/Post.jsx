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
        <div>
          <p>{props.text}</p>
          <div className={styles.like}>
            <a href="#">
              <span>{props.likesCount}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
