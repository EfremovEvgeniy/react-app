import React from "react";
import styles from "./NewMessage.module.scss";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "./../../../redux/dialogs-reducer";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  return (
    <div className={styles.new}>
      <textarea
        placeholder="Put your message here"
        maxLength="250"
        value={props.newMessageText}
        ref={newMessageElement}
        onChange={onMessageChange}
      />
      <button onClick={addMessage}>
        <span>Send message</span>
      </button>
    </div>
  );
};

export default NewMessage;
