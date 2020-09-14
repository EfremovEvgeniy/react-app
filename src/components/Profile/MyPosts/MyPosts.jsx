import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post text={p.text} id={p.id} likesCount={p.likesCount} key={p.id} />
  ));
  let addPost = (values) => {
    props.addPost(values.newPostBody);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>My posts</p>
      </div>
      <ReduxPostForm onSubmit={addPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.new}>
      <Field
        component="textarea"
        name="newPostBody"
        placeholder="Put your post here"
      />
      <button>
        <span>Add Post</span>
      </button>
    </form>
  );
};

const ReduxPostForm = reduxForm({
  form: "addPost",
})(AddPostForm);

export default MyPosts;
