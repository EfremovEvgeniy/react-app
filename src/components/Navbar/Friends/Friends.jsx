import React from "react";
import styles from "./Friends.module.scss";
import Friend from "./Friend/Friend";
import MenuItem from "../MenuItem/MenuItem";

const Friends = (props) => {
  let friendsElements = props.friends.map((f) => (
    <Friend name={f.name} id={f.id} avaUrl={f.avaUrl} key={f.id} />
  ));

  return (
    <div className={styles.friends}>
      <MenuItem path="/friends" title="Friends"></MenuItem>
      <div className={styles.wrapper}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
