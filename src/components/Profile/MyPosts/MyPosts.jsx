import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post text={p.text} id={p.id} likesCount={p.likesCount} key={p.id} />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <NewPost
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText}
      />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
