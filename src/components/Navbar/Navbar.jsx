import React from "react";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.menu}>
        <a href="#">Profile</a>
      </div>
      <div className={s.menu}>
        <a href="#">Messages</a>
      </div>
      <div className={s.menu}>
        <a href="#">News</a>
      </div>
      <div className={s.menu}>
        <a href="#">Music</a>
      </div>
      <div className={s.menu}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
