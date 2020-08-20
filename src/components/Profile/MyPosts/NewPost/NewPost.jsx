import React from "react";
import styles from "./NewPost.module.scss";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div className={styles.new}>
      <textarea
        placeholder="Put your post here"
        maxLength="250"
        ref={newPostElement}
      ></textarea>
      <button onClick={addPost}>
        <span>Add posts</span>
      </button>
    </div>
  );
};

export default NewPost;
