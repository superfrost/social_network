import React from 'react'
import styless from './Post.module.css'

const Post = () => {
    return (
        <div className={styless.item}>
            <div className={styless.logo_container}>
                <img alt="Logo_smb" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F125%2F125315.png&f=1&nofb=1"></img>
            </div>
            <div className={styless.post_container}>
                <div className={styless.post_owner_name}>
                    Somebody_name
                </div>
                <div className={styless.post_owner_date}>
                    Post date
                    {Date.now()}
                </div>
                <div className={styless.post_owner_location}>
                    Somebody_Location
                </div>
                <div className={styless.post_owner_text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium at, nam mollitia, tenetur eveniet praesentium esse deleniti error eum, earum possimus exercitationem magnam. Vel fugiat obcaecati quasi, cupiditate eligendi vero.
                </div>
                <div className={styless.button_container}>
                    <button className={styless.button}>👍</button>
                    <button className={styless.button}>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Post