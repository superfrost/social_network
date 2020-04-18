import React from "react";
import CreatePost from './CreatePost'
import { addPostActionCreator, onChangeTextareaActionCreator } from "../../../redux/profileReduser";

const CreatePostContainer = (props) => {

  let state = props.store.getState()

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onChangeTextarea = (text) => {
    let action = onChangeTextareaActionCreator(text);
    props.store.dispatch(action);
  }

  return (<CreatePost 
    posts={state.profilePage}
    //dispatch={props.dispatch}
    addPost={addPost} 
    onChangeTextarea={onChangeTextarea}/>
  );
};

export default CreatePostContainer
