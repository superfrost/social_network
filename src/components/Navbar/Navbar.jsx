import React from "react";
import styless from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  //debugger
  return (
    <nav className={styless.nav}>
      <div className={styless.item}>
        <NavLink to="/profile" activeClassName={styless.active}>Profile</NavLink>
      </div>
      <div className={styless.item}>
        <NavLink to="/dialogs" activeClassName={styless.active}>Messages</NavLink>
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
      <div className={styless.item}>
        <NavLink to='/users'activeClassName={styless.active}>Users</NavLink>
      </div>
      <div className="Friends">
        <Friends />
      </div>
    </nav>
  );
};

export default Navbar;
