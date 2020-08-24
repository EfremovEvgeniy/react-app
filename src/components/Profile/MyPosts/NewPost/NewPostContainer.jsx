import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../../redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <NewPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={props.newPostText}
    />
  );
};

export default NewPostContainer;
