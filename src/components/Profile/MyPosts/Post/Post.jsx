import React from "react";
import styless from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styless.item}>
      <div className={styless.logo_container}>
        <img alt="Logo_smb" src={props.photoSrc}></img>
      </div>
      <div className={styless.post_container}>
        <div className={styless.post_owner_name}>{props.name}</div>
        <div className={styless.post_owner_date}>{props.state.date}</div>
        <div className={styless.post_owner_text}>{props.state.message}</div>
        <div className={styless.button_container}>
          <button className={styless.button}>
            {" "}
            <span>💕</span>
            {props.state.like_count}
          </button>
          <button className={styless.button}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
