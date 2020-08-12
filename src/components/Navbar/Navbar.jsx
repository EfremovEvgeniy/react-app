import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <a href="/profile">Profile</a>
      </div>
      <div className={styles.menu}>
        <a href="/dialogs">Dialogs</a>
      </div>
      <div className={styles.menu}>
        <a href="/news">News</a>
      </div>
      <div className={styles.menu}>
        <a href="/music">Music</a>
      </div>
      <div className={styles.menu}>
        <a href="/setting">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
