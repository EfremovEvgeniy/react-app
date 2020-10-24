import React from "react";
import styles from "./UploadFile.module.scss";

const UploadFile = (props) => {
  return (
    <div className={styles.buttonWrapper}>
      <span className={styles.label}>Upload Avatar</span>
      <input type="file" name="upload" onChange={props.onMainPhotoSelected} />
    </div>
  );
};

export default UploadFile;
