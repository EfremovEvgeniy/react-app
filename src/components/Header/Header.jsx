import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="http://localhost:3000/">
        <img
          className={styles.logo}
          src="https://cdn.worldvectorlogo.com/logos/react.svg"
          alt=""
        />
      </a>
    </header>
  );
};

export default Header;
