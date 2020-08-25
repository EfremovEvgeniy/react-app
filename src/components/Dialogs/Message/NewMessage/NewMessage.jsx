import React from "react";
import styles from "./NewMessage.module.scss";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  let onAddMessage = () => {
    props.addMessage();
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
      <button onClick={onAddMessage}>
        <span>Send message</span>
      </button>
    </div>
  );
};

export default NewMessage;
