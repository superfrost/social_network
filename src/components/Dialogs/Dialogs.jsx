import React from 'react'
import styless from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import OneMessage from './Message/Message'

const Dialogs = (props) => {
    let className= '1';
    let dialogElements = props.state.dialogsData.map(dialog => (<DialogItem state={dialog}/>))
    let messageElements = props.state.messageData.map( message => {
        let src = props.state.friends[message.person_id - 1].photoSrc;
        return <OneMessage className={styless.messages} state={message} src={src}/>})

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