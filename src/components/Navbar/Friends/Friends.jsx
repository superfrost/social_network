import React, { useEffect } from "react";
import styless from "./Friends.module.css";
import Noavatar from "../../Common/NoAvatar/NoAvatar";

const Friends = (props) => {
  // useEffect(() => {
  //   props.getFriends(props.user_id)
  // }, [props.friends])

  let friendsItems = props.friends.map(friend => 
    friend.photo_src
      ? <img
        className={styless.friendAvatar}
        alt={friend.name}
        src={friend.photo_src}
        key={friend.id}
        />
      : <span className={styless.spann}>
          <Noavatar alt={friend.name} 
            //className={styless.friendAvatar}
            />
        </span>
  );

  return (
    <div className={styless.friends}>
      Friends:
      <div>{friendsItems}</div>
    </div>
  );
};

export default Friends
