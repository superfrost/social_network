import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>new post</div>
      <div className={styless.posts}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  )
}

export default MyPosts
