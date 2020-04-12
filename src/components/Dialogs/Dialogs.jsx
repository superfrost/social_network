import React from 'react'
import styless from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogToPerson = (props) => {
    return (
        <div className={styless.dialog_to_person}>
            <NavLink to={`/dialogs/${props.person_id}`} className={styless.person_link}
                activeClassName={styless.person_link_active}>{props.person_name}</NavLink>
        </div>
    )
}

const OneMessage = (props) => {
    return (
        <div className={styless.one_message}>
            {props.one_message_text}
        </div>
    )
}

let dialogsData = [
    {id: 1, name: 'Nik'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Den'},
    {id: 4, name: 'Sara'}
]

let messageData = [
    {id: 1, message: "Hi. Realy cool weather! Do you wanna go to park?"},
    {id: 2, message: "Hi it's true. Meat me near my house in 15."},
    {id: 3, message: "Ok I'll be there!"},
    {id: 4, message: "Ok. See you 😊"}
]

let dialogElements = dialogsData
    .map(dialog => (<DialogToPerson person_name={dialog.name} person_id={dialog.id}/>))

let messageElements = messageData
    .map( message => (<OneMessage one_message_text={message.message}/>))

const Dialogs = (props) => {
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