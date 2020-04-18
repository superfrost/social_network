import React from "react";
import styless from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./Message/Message";
import { addMessageActionCreator, OnChangeTextInTextareaActionCreator } from "../../redux/dialogsReduser";

const Dialogs = (props) => {
  
  let addMessage = () => {
    let action = addMessageActionCreator();
    props.dispatch(action)
  };

  let OnChangeTextInTextarea = (event) => {
    let text = event.target.value;
    let action = OnChangeTextInTextareaActionCreator(text);
    props.dispatch(action)
  };

  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem state={dialog} />
  ));

  let messageElements = props.state.messageData.map( message => {
    let src = props.state.friends[message.person_id - 1].photoSrc;
    return (
      <OneMessage className={styless.messages} state={message} src={src} />
    );
  });

  let messageElementsReverse = messageElements.slice().reverse()

  return (
    <div className={styless.dialog_container}>
      <div className={styless.dialog_item}>
        {dialogElements}
      </div>
      <div className={styless.messages}>
        <div>
          <textarea
            onChange={OnChangeTextInTextarea}
            className={styless.message_textarea_send}
            id="newMessageArea"
            value={props.state.newMessageText}
          />
          <br />
          <button onClick={addMessage} className={styless.newMessageButton}>
            Send
          </button>
        </div>
        {messageElementsReverse}
      </div>
    </div>
  );
};

export default Dialogs;
