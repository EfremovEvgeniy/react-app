import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.menu}>
        <NavLink to="/dialogs">Dialogs</NavLink>
      </div>
      <div className={styles.menu}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={styles.menu}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={styles.menu}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
