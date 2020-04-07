import React from "react";
import styless from "./Navbar.module.css";

//console.log(styless)
//console.log(`${styless.item} ${styless.active}`)

const Navbar = () => {
  return (
    <nav className={styless.nav}>
      <div className={`${styless.item} ${styless.active}`}>
        <a>Profile</a>
      </div>
      <div className={styless.item}>
        <a>Massages</a>
      </div>
      <div className={styless.item}>
        <a>News</a>
      </div>
      <div className={styless.item}>
        <a>Music</a>
      </div>
      <div className={styless.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
