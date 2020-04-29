import React from "react";
import styless from "./MyProfile.module.css";
import no_avatar from "../../../asserts/img/no_ava.png";
import ProfileStatus from "./ProfileStatus";

const MyProfile = (props) => {
  //debugger
  return (
    <div>
      <div className={styless.my_profile_container}>
        <div className={styless.my_logo_container}>
        {props.myProfile.photo_src
        ? <img
            className={styless.ava}
            alt="my_avatar"
            src={props.myProfile.photo_src}
          />
        : <img
            className={styless.ava}
            alt="my_avatar"
            src={no_avatar}
          />}
        </div>
        <div className={styless.my_event_container}>
          <div className={styless.my_event_user_name}>{props.myProfile.name}</div>
          <ProfileStatus status={props.myProfile.status}/>
          <div>{props.myProfile.location}</div>
          <div>{props.myProfile.work}</div>
          <div>{props.myProfile.education}</div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
