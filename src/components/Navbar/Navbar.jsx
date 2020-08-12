import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <a href="#">Profile</a>
      </div>
      <div className={styles.menu}>
        <a href="#">Messages</a>
      </div>
      <div className={styles.menu}>
        <a href="#">News</a>
      </div>
      <div className={styles.menu}>
        <a href="#">Music</a>
      </div>
      <div className={styles.menu}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
