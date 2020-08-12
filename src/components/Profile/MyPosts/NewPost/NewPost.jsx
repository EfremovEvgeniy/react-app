import React from "react";
import styles from "./NewPost.module.scss";

const NewPost = (props) => {
  return (
    <div className={styles.new}>
      <textarea placeholder="Put your post here" maxLength="250"></textarea>
      <button>Add posts</button>
    </div>
  );
};

export default NewPost;
