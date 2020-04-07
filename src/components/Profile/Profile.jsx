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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flightnetwork.com%2Fworlds-best-beaches%2Fwp-content%2Fuploads%2F2018%2F11%2Fheader-top100-beach25.jpg&f=1&nofb=1"
          />
      </div>
      <div>
        <img
          className={styless.ava}
          alt="avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9akSG3RnA1s%2Fmaxresdefault.jpg&f=1&nofb=1"
        />
        ava + description
      </div>
      <MyPosts></MyPosts>
      Form to send
    </div>
  );
};

export default Profile;
