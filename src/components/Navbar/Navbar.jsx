import React from "react";
import styless from "./Navbar.module.css";

//console.log(styless)
//console.log(`${styless.item} ${styless.active}`)

const Navbar = () => {
  return (
    <nav className={styless.nav}>
      <div className={`${styless.item} ${styless.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={styless.item}>
        <a href="/dialogs">Massages</a>
      </div>
      <div className={styless.item}>
        <a href="/news">News</a>
      </div>
      <div className={styless.item}>
        <a href="/music">Music</a>
      </div>
      <div className={styless.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
