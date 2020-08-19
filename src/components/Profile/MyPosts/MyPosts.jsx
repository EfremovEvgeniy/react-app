import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
  let postsData = [
    { id: 1, text: "My first post", likesCount: 1 },
    { id: 2, text: "My second post", likesCount: 5 },
  ];

  let postsElements = postsData.map((p) => (
    <Post text={p.text} id={p.id} likesCount={p.likesCount} />
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <NewPost />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
