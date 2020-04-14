import React from 'react'
import styless from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import OneMessage from './Message/Message'

let newReactRef = React.createRef()
let addNewAlert = () => {
    let text = newReactRef.current.value;
    alert(text)
}

const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData.map(dialog => (<DialogItem state={dialog}/>))
    let messageElements = props.state.messageData.map( message => {
        let src = props.state.friends[message.person_id - 1].photoSrc;
        return <OneMessage className={styless.messages} state={message} src={src} />})

    
    


    return (
        <div className={styless.dialog_container}>
            <div className={styless.dialog_item}>
                {dialogElements}
            </div>
            <div className={styless.messages}>
                <form>
                    <textarea ref={newReactRef} className={styless.message_textarea_send} name="" id=""></textarea>
                    <br/>
                    <button onClick={addNewAlert} type="submit">Send</button>
                </form>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs