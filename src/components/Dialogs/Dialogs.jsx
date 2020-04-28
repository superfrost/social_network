import React from "react";
import { Redirect } from "react-router-dom"
import styless from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./Message/Message";

const Dialogs = (props) => {
  
  let addMessage = () => {
    props.addMessage()
  };

  let OnChangeTextInTextarea = (event) => {
    let text = event.target.value;
    props.OnChangeTextInTextarea(text)
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

  if (!this.props.isAuth) return <Redirect to={"/login"}/>

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
