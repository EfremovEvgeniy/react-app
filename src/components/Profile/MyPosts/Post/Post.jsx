import React from "react";
import styles from "./Post.module.scss";

const Post = (props) => {
  return <div className={styles.post}>{props.text}</div>;
};

export default Post;
