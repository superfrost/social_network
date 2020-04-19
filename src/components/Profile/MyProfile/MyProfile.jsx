import React from "react";
import styless from "./MyProfile.module.css";

const MyProfile = (props) => {
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
          <img
            className={styless.ava}
            alt="my_avatar"
            src={props.state.avatar}
          />
        </div>
        <div className={styless.my_event_container}>
          <div className={styless.my_event_user_name}>{props.state.name}</div>
          <div>{props.state.work}</div>
          <div>{props.state.education}</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
