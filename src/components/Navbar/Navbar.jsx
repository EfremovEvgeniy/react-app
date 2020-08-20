import React from "react";
import styles from "./Navbar.module.scss";
import MenuItem from "./MenuItem/MenuItem";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <MenuItem path="/profile" title="Profile" />
      <MenuItem path="/dialogs" title="Dialogs" />
      <MenuItem path="/news" title="News" />
      <MenuItem path="/music" title="Music" />
      <Friends friends={props.navbar.friends} />
      <MenuItem path="/settings" title="Settings" />
    </nav>
  );
};

export default Navbar;
