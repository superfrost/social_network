import React from 'react'
import styless from './MyProfile.module.css'

const MyProfile = () => {
    return (
        <div className={styless.my_profile_container}>
            <div className={styless.my_logo_container}>
                <img
                    className={styless.ava}
                    alt="avatar"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F114%2F114469.png&f=1&nofb=1"
                />
            </div>
            <div className={styless.my_event_container}>
                <div className={styless.my_event_user_name}>
                    User_name
                </div>
                <div>
                    Wokr
                </div>
                <div>
                    Education
                </div>
            </div>
        </div>
    )
}

export default MyProfile