import React from "react";
import styless from "./../Profile.module.css";
import { addPostActionCreator, onChangeTextareaActionCreator } from "../../../redux/state";

const CreatePost = (props) => {

  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  let onChangeTextarea = (event) => {
    let text = event.target.value;
    let action = onChangeTextareaActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div>
      <div className={styless.my_event_text}>
        <textarea
          onChange={onChangeTextarea}
          id="new_text_area"
          placeholder="Enter your event..."
          value={props.state}
        />
      </div>
      <div>
        <button onClick={addPost} className={styless.send_button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CreatePost
