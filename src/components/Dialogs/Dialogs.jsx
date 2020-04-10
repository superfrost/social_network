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

const Dialogs = (props) => {
    return (
        <div className={styless.dialog_container}>
            <div className={styless.dialog_item}>
                <DialogToPerson person_name={dialogsData[0].name} person_id={dialogsData[0].id}/>
                <DialogToPerson person_name={dialogsData[1].name} person_id={dialogsData[1].id}/>
                <DialogToPerson person_name={dialogsData[2].name} person_id={dialogsData[2].id}/>
                <DialogToPerson person_name={dialogsData[3].name} person_id={dialogsData[3].id}/>
            </div>
            <div className={styless.messages}>
                <OneMessage one_message_text={messageData[0].message}/>
                <OneMessage one_message_text={messageData[1].message}/>
                <OneMessage one_message_text={messageData[2].message}/>
                <OneMessage one_message_text={messageData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs