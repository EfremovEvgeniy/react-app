import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <NewPost />
      <div className={styles.posts}>
        <Post text="My first post" />
        <Post text="My second post" />
      </div>
    </div>
  );
};

export default MyPosts;
