import React from 'react'
import styless from './Post.module.css'

const Post = () => {
    return (
        <div className={styless.item}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F125%2F125315.png&f=1&nofb=1"></img>
            <div>
                post 1
            </div>
            <div>
                Like
                <button>👍</button>
                <button>Send</button>
            </div>

        </div>
    )
}

export default Post