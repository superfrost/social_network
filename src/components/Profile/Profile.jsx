import React from "react";
import styless from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styless.content}>
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
            alt="avatar"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F114%2F114469.png&f=1&nofb=1"
          />
        </div>
        <div className={styless.my_event_container}>
          <div className={styless.my_event_user_name}>
            User_name
          </div>
          <div className={styless.my_event_text}>
            <input type="text" placeholder="Enter your event..."></input>
          </div>
        </div>
      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default Profile;
