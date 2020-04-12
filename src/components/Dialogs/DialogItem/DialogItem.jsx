import React from 'react'
import styless from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = `/dialogs/${props.person_id}`
    
    return (
        <div className={styless.dialog_to_person}>
            <NavLink to={path} className={styless.person_link}
                activeClassName={styless.person_link_active}>{props.person_name}</NavLink>
        </div>
    )
}

export default DialogItem