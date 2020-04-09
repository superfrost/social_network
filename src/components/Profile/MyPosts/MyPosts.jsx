import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return (
    <div>
      <div>
        All posts
      </div>
      <div className={styless.posts}>
        <Post message="Hi it's me !!!" like_count="17"></Post>
        <Post message="Where are you?" like_count="4"></Post>
      </div>
    </div>
  )
}

export default MyPosts
