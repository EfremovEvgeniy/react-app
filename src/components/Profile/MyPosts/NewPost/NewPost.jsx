import React from "react";
import styles from "./NewPost.module.scss";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.new}>
      <textarea
        placeholder="Put your post here"
        maxLength="250"
        ref={newPostElement}
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
