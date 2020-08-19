import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = (props) => {
  return (
    <div className={styles.menu}>
      <NavLink to={props.path}>{props.title}</NavLink>
    </div>
  );
};

export default MenuItem;
