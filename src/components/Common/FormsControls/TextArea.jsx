import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./TextArea.module.scss";

const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <TextareaAutosize {...input} {...props} minRows="2" />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default TextArea;
