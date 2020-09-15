import { reduxForm, Field } from "redux-form";
import React from "react";
import styles from "./../SimpleForm.module.scss";
import {
  requiredField,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import TextArea from "../../Common/FormsControls/TextArea";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.new}>
      <Field
        component={TextArea}
        name="newPostBody"
        placeholder="Put your post here"
        validate={[requiredField, maxLength10]}
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
