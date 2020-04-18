import React from "react";
import { addMessageActionCreator, OnChangeTextInTextareaActionCreator } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store
  
  let addMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action)
  };

  let OnChangeTextInTextarea = (text) => {
    let action = OnChangeTextInTextareaActionCreator(text);
    props.store.dispatch(action)
  };

  return (<Dialogs
    state={props.state}
    addMessage={addMessage}
    OnChangeTextInTextarea={OnChangeTextInTextarea}/>);
};

export default DialogsContainer;
