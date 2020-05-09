import React from "react";
import styless from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";
import { getFriends } from "../../redux/profileReduser";

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
      {props.isAuth
      ? <div className="Friends">
        <Friends friends={props.friends} 
          getFriends={props.getFriends}
          myProfile={props.myProfile}
          user_id={props.user_id}
          />
      </div>
      : null}
    </nav>
  );
};

let mapStateToProps = (state) => ({
  friends: state.profilePage.friends,
  myProfile: state.profilePage.myProfile,
  isAuth: state.auth.isAuth,
  user_id: state.auth.id
})

export default connect(mapStateToProps, {getFriends})(Navbar);
