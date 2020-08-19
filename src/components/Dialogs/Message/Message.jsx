import React from "react";
import styles from "./Message.module.scss";

const Message = (props) => {
  return (
    <div className={styles.message}>
      <p>{props.text}</p>
    </div>
  );
};

export default Message;
