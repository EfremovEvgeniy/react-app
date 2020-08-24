import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post text={p.text} id={p.id} likesCount={p.likesCount} />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <NewPostContainer
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
