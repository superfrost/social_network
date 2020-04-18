import React from "react";
import styless from "./../Profile.module.css";

const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

const CreatePost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    const action = { type: 'ADD-POST' };
    props.dispatch(action);
  };

  let onChangeTextarea = () => {
    let text = newPostElement.current.value;
    const action = {type: 'NEW-POST-TEXT-ON-CHANGE', text };
    props.dispatch(action);
  }

  return (
    <div>
      <div className={styless.my_event_text}>
        <textarea
          ref={newPostElement}
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

export default CreatePost;
