import React from "react";
import styless from "./Friends.module.css";
import { connect } from "react-redux";

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

let mapStateToProps = (state) => ({
  friends: state.navbar.friends
})

export default connect(mapStateToProps, {})(Friends);
