import React from "react";
import styless from "./../Profile.module.css";

const CreatePost = (props) => {

  let addPost = () => {
    props.addPost();
  };

  let onChangeTextarea = (event) => {
    let text = event.target.value;
    props.onChangeTextarea(text);
  }

  return (
    <div>
      <div className={styless.my_event_text}>
        <textarea
          onChange={onChangeTextarea}
          id="new_text_area"
          placeholder="Enter your event..."
          value={props.posts.newPostText}
        />
      </div>
      <div>
        <button 
          onClick={addPost} 
          className={styless.send_button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
