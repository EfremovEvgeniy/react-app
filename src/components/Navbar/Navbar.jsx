import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const MenuItem = (props) => {
  return (
    <div className={styles.menu}>
      <NavLink to={props.path}>{props.title}</NavLink>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <MenuItem path="/profile" title="Profile" />
      <MenuItem path="/dialogs" title="Dialogs" />
      <MenuItem path="/news" title="News" />
      <MenuItem path="/music" title="Music" />
      <MenuItem path="/settings" title="Settings" />
    </nav>
  );
};

export default Navbar;
