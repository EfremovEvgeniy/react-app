import { reduxForm, Field } from "redux-form";
import React from "react";
import styles from "./../SimpleForm.module.scss";

const PostForm = (props) => {
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
})(PostForm);

export default ReduxPostForm;
