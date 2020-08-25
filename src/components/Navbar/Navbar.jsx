import React from "react";
import styles from "./Navbar.module.scss";
import MenuItem from "./MenuItem/MenuItem";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <MenuItem path="/profile" title="Profile" />
      <MenuItem path="/dialogs" title="Dialogs" />
      <MenuItem path="/news" title="News" />
      <MenuItem path="/music" title="Music" />
      <FriendsContainer />
      <MenuItem path="/settings" title="Settings" />
    </nav>
  );
};

export default Navbar;
