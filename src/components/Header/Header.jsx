import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import defaultAva from "./../../assets/images/default_ava.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <a href="http://localhost:3000/">
          <img
            className={styles.logo}
            src="https://freepngimg.com/download/minecraft/94774-square-hamburger-area-art-minecraft-pixel.png"
            alt=""
          />
        </a>
      </div>
      <div className={styles.loginBlock}>
        {props.isCurrentUserSetted ? (
          <div className={styles.currentUser}>
            <p>{props.currentUser.fullName}</p>
            <img
              src={props.currentUser.photos.small || defaultAva}
              alt="avatar"
            />
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
