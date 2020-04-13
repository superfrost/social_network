import React from 'react'
import styless from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import OneMessage from './Message/Message'

const Dialogs = (props) => {
    //console.log('Dialogs props:', props.dialogsData);
    let dialogElements = props.state.dialogsData.map(dialog => (<DialogItem person_name={dialog.name} person_id={dialog.id}/>))
    let messageElements = props.state.messageData.map( message => (<OneMessage one_message_text={message.message}/>))

    return (
        <div className={styless.dialog_container}>
            <div className={styless.dialog_item}>
                {dialogElements}
            </div>
            <div className={styless.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs