import React from "react";
import styles from "./NewMessage.module.scss";
import TextareaAutosize from "react-textarea-autosize";

const NewMessage = (props) => {
  let onMessageChange = (event) => {
    props.updateNewMessageText(event.target.value);
  };
  return (
    <div className={styles.new}>
      <TextareaAutosize
        minRows="2"
        placeholder="Put your message here"
        value={props.newMessageText}
        onChange={onMessageChange}
      />
      <button onClick={props.addMessage}>
        <span>Send message</span>
      </button>
    </div>
  );
};

export default NewMessage;
