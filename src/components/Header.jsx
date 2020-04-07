import React from "react";
import styless from "./Header.module.css";

const Header = () => {
  return (
    <header className={styless.header}>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.logofound.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fcity-business-logo-02.jpg&f=1&nofb=1" />
    </header>
  );
};

export default Header;
