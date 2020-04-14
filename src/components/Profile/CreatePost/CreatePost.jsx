import React from "react";
import styless from "./../Profile.module.css";

const CreatePost = (props) => {
  debugger;

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addNewPost(text);
  };

  return (
    <div>
      <div className={styless.my_event_text}>
        <textarea
          ref={newPostElement}
          id="new_text_area"
          placeholder="Enter your event..."
        ></textarea>
      </div>
      <div>
        <button onClick={addPost} className={styless.send_button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
