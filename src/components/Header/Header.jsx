import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="http://localhost:3000/">
          <img
            className={styles.logo}
            src="https://freepngimg.com/download/minecraft/94774-square-hamburger-area-art-minecraft-pixel.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
