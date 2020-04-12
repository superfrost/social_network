import React from 'react'
import styless from './../Dialogs.module.css'

const OneMessage = (props) => {
    return (
        <div className={styless.one_message}>
            {props.one_message_text}
        </div>
    )
}

export default OneMessage