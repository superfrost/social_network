import React from "react";
import styless from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import OneMessage from "./Message/Message";
import { Field, reduxForm } from 'redux-form'
import { FormControl } from "../Common/FormsControl/FormsControl";
import { required, maxLengthCreator } from "../../utils/validation";

const maxLength255 = maxLengthCreator(255)

let DialogsForm = (props) => {
  return (<div>
    <form onSubmit={props.handleSubmit} >
      <Field name="dialogTextarea"
        typeField="textarea"
        component={FormControl} 
        className={styless.message_textarea_send} 
        validate={[required, maxLength255]} 
        />
      <div>
        <button type="submit" className={styless.newMessageButton}>Send</button>
      </div>
    </form>
    </div>
  )
}

DialogsForm = reduxForm({form: "dialogsForm"})(DialogsForm)

const Dialogs = (props) => {
  
  let onSubmitMessage = (value) => {
    props.addMessage(value.dialogTextarea)
  }

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
        <DialogsForm onSubmit={onSubmitMessage}/>
        {messageElementsReverse}
      </div>
    </div>
  )
};

export default Dialogs;
