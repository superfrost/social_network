import React from "react";
import styless from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./Message/Message";

const Dialogs = (props) => {
  
  let newReactRef = React.createRef();
  let addMessage = () => {
    let text = newReactRef.current.value;
    props.addNewMessage(text);
    newReactRef.current.value = "";
  };

  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem state={dialog} />
  ));
  let messageElements = props.state.messageData.map((message) => {
    let src = props.state.friends[message.person_id - 1].photoSrc;
    return (
      <OneMessage className={styless.messages} state={message} src={src} />
    );
  });

  let messageElementsReverse = messageElements.slice().reverse()



  return (
    <div className={styless.dialog_container}>
      <div className={styless.dialog_item}>{dialogElements}</div>
      <div className={styless.messages}>
        <form>
          <textarea
            ref={newReactRef}
            className={styless.message_textarea_send}
            name=""
            id=""
          ></textarea>
          <br />
          <button onClick={addMessage} type="submit">
            Send
          </button>
        </form>
        {messageElementsReverse}
      </div>
    </div>
  );
};

export default Dialogs;
