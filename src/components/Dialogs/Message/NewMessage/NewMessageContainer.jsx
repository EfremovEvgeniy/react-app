import React from "react";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
  let onMessageChange = (text) => {
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  return (
    <NewMessage
      onMessageChange={onMessageChange}
      addMessage={addMessage}
      newMessageText={props.newMessageText}
    />
  );
};

export default NewMessageContainer;
