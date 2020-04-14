import React from "react";
import styless from "./MyProfile.module.css";

const MyProfile = (props) => {
  return (
    <div className={styless.my_profile_container}>
      <div className={styless.my_logo_container}>
        <img className={styless.ava} alt="my_avatar" src={props.state.avatar} />
      </div>
      <div className={styless.my_event_container}>
        <div className={styless.my_event_user_name}>{props.state.name}</div>
        <div>{props.state.work}</div>
        <div>{props.state.education}</div>
      </div>
    </div>
  );
};

export default MyProfile;
