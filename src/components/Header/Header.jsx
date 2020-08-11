import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <a href="http://localhost:3000/">
        <img
          className={s.logo}
          src="https://cdn.worldvectorlogo.com/logos/react.svg"
          alt=""
        />
      </a>
    </header>
  );
};

export default Header;
