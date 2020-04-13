import React from "react";
import styless from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

//console.log(styless)
//console.log(`${styless.item} ${styless.active}`)

const Navbar = () => {
  return (
    <nav className={styless.nav}>
      <div className={styless.item}>
        <NavLink to="/profile" activeClassName={styless.active}>Profile</NavLink>
      </div>
      <div className={styless.item}>
        <NavLink to="/dialogs" activeClassName={styless.active}>Massages</NavLink>
      </div>
      <div className={styless.item}>
        <NavLink to="/news" activeClassName={styless.active}>News</NavLink>
      </div>
      <div className={styless.item}>
        <NavLink to="/music" activeClassName={styless.active}>Music</NavLink>
      </div>
      <div className={styless.item}>
        <NavLink to="/settings" activeClassName={styless.active}>Settings</NavLink>
      </div>
      <div className="Friends">
        Friends
        <div>
          Photo
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
