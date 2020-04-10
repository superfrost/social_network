import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'

let postsData = [
  {id: 1, message: "Hi it's me !!!", like_count: 17},
  {id: 2, message: "Where are you?", like_count: 4}
]

const MyPosts = (props) => {
  return (
    <div>
      <div>
        All posts
      </div>
      <div className={styless.posts}>
        <Post message={postsData[0].message} like_count={postsData[0].like_count}></Post>
        <Post message={postsData[1].message} like_count={postsData[1].like_count}></Post>
      </div>
    </div>
  )
}

export default MyPosts
