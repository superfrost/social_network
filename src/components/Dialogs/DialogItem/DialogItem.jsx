import React from 'react'
import styless from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = `/dialogs/${props.state.id}`

    return (
        <div className={styless.dialog_to_person}>
            <div>
                <img className={styless.dialogAvatar} alt={props.state.name} src={props.state.photoSrc} />
            </div>
            <NavLink to={path} className={styless.person_link} activeClassName={styless.person_link_active}>
                    {props.state.name}
                </NavLink>
        </div>
    )
}

export default DialogItem