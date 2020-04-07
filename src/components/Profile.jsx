import React from "react";
import styless from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styless.content}>
      <div>
        <img
          alt="background"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-rWRXqcYSS4%2Fmaxresdefault.jpg&f=1&nofb=1"
        ></img>
      </div>
      <div>
        <img
          className={styless.ava}
          alt="avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9akSG3RnA1s%2Fmaxresdefault.jpg&f=1&nofb=1"
        />
        ava + description
      </div>
      <div>
        My posts
        <div>new post</div>
        <div className={styless.posts}>
          <div className={styless.item}>post 1</div>
          <div className={styless.item}>post 2</div>
        </div>
      </div>
      Main content
    </div>
  );
};

export default Profile;
