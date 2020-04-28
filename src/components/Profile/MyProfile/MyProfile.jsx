import React from "react";
import styless from "./MyProfile.module.css";
import no_avatar from "../../../asserts/img/no_ava.png";

const MyProfile = (props) => {
  //debugger
  return (
    <div>
      <div>
        <img
          className={styless.back_img}
          alt="background"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zicasso.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_2048custom_zictheme_breakpoint_standard_1x%2Fpublic%2Fheaderimages%2Ftours%2FSeychelles-Beautiful-Beach-Pano.jpg%3Ftimestamp%3D1382001009&f=1&nofb=1"
        />
      </div>
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
          <div>{props.myProfile.status}</div>
          <div>{props.myProfile.location}</div>
          <div>{props.myProfile.work}</div>
          <div>{props.myProfile.education}</div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
