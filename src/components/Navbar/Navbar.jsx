import React from "react";
import styles from "./Navbar.module.scss";
import MenuItem from "./MenuItem/MenuItem";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <MenuItem path="/profile" title="Profile" />
      <MenuItem path="/dialogs" title="Dialogs" />
      <MenuItem path="/users" title="Find user" />
    </nav>
  );
};

export default Navbar;
