import React from "react";
import styless from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./Message/Message";

const Dialogs = (props) => {
  //debugger;
  let newMessageReactRef = React.createRef();
  
  let addMessage = () => {
    props.dispatch({
      type: 'ADD-NEW-MESSAGE'
    })
  };

  let OnChangeTextInTextarea = () => {
    let text = newMessageReactRef.current.value;
    props.dispatch({
      type: 'NEW-MESSAGE-TEXT-ON-CHANGE',
      text
    }) //newMessageTextOnChange(text);
  };
  console.log(props.state.messageData);
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
        <form>
          <textarea
            ref={newMessageReactRef}
            onChange={OnChangeTextInTextarea}
            className={styless.message_textarea_send}
            name="newMessageArea"
            id="newMessageArea"
            value={props.state.newMessageText}
          />
          <br />
          <button onClick={addMessage} className={styless.newMessageButton}>
            Send
          </button>
        </form>
        {messageElementsReverse}
      </div>
    </div>
  );
};

export default Dialogs;
