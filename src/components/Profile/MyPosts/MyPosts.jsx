import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
  let postsData = [
    { id: 1, text: "My first post", likesCount: 0 },
    { id: 2, text: "My second post", likesCount: 0 },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <NewPost />
      <div className={styles.posts}>
        <Post text="My first post" id="1" likesCount="1" />
        <Post text="My second post" id="2" likesCount="10" />
      </div>
    </div>
  );
};

export default MyPosts;
