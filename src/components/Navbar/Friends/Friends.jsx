import React from "react";
import styless from "./Friends.module.css";

const Friends = (props) => {
  let friendsItems = props.friends.map((friend) => (
    <img
      className={styless.friendAvatar}
      alt={friend.name}
      src={friend.photoSrc}
      key={friend.id}
    />
  ));

  return (
    <div className={styless.friends}>
      Friends:
      <div>{friendsItems}</div>
    </div>
  );
};

export default Friends
