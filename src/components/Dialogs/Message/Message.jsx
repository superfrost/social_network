import React from "react";
import styless from "./../Dialogs.module.css";

const OneMessage = (props) => {
  let className = "1";
  props.state.person_id == 1
    ? (className = styless.one_message_my)
    : (className = styless.one_message);

  return (
    <div className={className}>
      <div className={styless.one_message_content}>
        <img
          className={styless.message_avatar}
          alt="friend_avatar"
          src={props.src}
        />
        <div className={styless.time}>Time</div>
      </div>
      {props.state.message}
    </div>
  );
};

export default OneMessage;