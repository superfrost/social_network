import React from "react";
import styless from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  //debugger
  return (
    <header className={styless.header}>
      <div>
        <img alt="Logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.logofound.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fcity-business-logo-02.jpg&f=1&nofb=1" />
      </div>
      <div>

      </div>
      <div>
        <input className="Search" placeholder="Search"></input>
        <button className="Button_Search">Search</button>
      </div>
      <div className={styless.loginBlock}>
        {
          props.isAuth ? 
          <>
            <img src={props.userPhoto} alt="user_logo"/>
            {props.login}
          </>
          : <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
    
  );
};

export default Header;
