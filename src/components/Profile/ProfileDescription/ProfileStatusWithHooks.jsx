import React, { useState, useEffect } from "react";
import styles from "./ProfileStatus.module.scss";
import TextareaAutosize from "react-textarea-autosize";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };
  let deactivateEditMode = () => {
    if (status && status.length > 0) {
      setEditMode(false);
    }
    props.updateProfileStatus(status);
  };
  let updateStatus = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && props.status && (
        <div className={styles.status}>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <TextareaAutosize
            autoFocus
            minRows="2"
            maxLength="300"
            onBlur={deactivateEditMode}
            onChange={updateStatus}
            value={status || undefined}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
