import React from 'react'
import styless from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialog_to_person = (props) => {
    return (
        <div className={styless.dialog_to_person}>
            <NavLink to={`/dialogs/${props.person_id}`} className={styless.person_link}
                activeClassName={styless.person_link_active}>{props.person_name}</NavLink>
        </div>
    )
}

const One_message = (props) => {
    return (
        <div className={styless.one_message}>
            {props.one_message_text}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={styless.dialog_container}>
            <div className={styless.dialog_item}>
                <Dialog_to_person person_name="Nik" person_id="1"/>
                <Dialog_to_person person_name="Mary" person_id="2"/>
                <Dialog_to_person person_name="Den" person_id="3"/>
                <Dialog_to_person person_name="Sara" person_id="4"/>
            </div>
            <div className={styless.messages}>
                <One_message one_message_text="Hi. Realy cool weather! Do you wanna go to park?"/>
                <One_message one_message_text="Hi it's true. Meat me near my house in 15."/>
                <One_message one_message_text="Ok I'll be there!"/>
                <One_message one_message_text="Ok. See you 😊"/>
            </div>
        </div>
    )
}

export default Dialogs