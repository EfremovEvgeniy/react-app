import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <div className={styles.new}>
        <textarea></textarea>
        <button>Add posts</button>
      </div>
      <div className={styles.posts}>
        <Post text="new post" />
        <Post text="second post" />
      </div>
    </div>
  );
};

export default MyPosts;
