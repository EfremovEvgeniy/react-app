import React from "react";
import styles from "./NewMessage.module.scss";

const NewMessage = (props) => {
  return (
    <div className={styles.new}>
      <textarea placeholder="Put your message here" maxLength="250" />
      <button>
        <span>Send message</span>
      </button>
    </div>
  );
};

export default NewMessage;
