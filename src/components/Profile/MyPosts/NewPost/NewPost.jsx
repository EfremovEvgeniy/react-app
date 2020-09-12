import React from "react";
import styles from "./NewPost.module.scss";
import TextareaAutosize from "react-textarea-autosize";

const NewPost = (props) => {
  let onPostChange = (event) => {
    props.updateNewPostText(event.target.value);
  };

  return (
    <div className={styles.new}>
      <TextareaAutosize
        minRows="2"
        placeholder="Put your post here"
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={props.addPost}>
        <span>Add posts</span>
      </button>
    </div>
  );
};

export default NewPost;
