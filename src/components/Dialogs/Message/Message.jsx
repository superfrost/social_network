import React from "react";
import styless from "./../Dialogs.module.css";

const OneMessage = (props) => {
  let clsName = "1";
  props.state.person_id === 1
    ? (clsName = styless.one_message_my)
    : (clsName = styless.one_message);

  return (
    <div className={clsName}>
      <div className={styless.one_message_content}>
        <img
          className={styless.message_avatar}
          alt="friend_avatar"
          src={props.src}
        />
        <div className={styless.time}>
          {props.state.date}
        </div>
      </div>
      {props.state.message}
    </div>
  );
};

export default OneMessage;