import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'

let posts = [
  {id: 1, message: "Hi it's me !!!", like_count: 17},
  {id: 2, message: "Where are you?", like_count: 4},
  {id: 3, message: "Are you kidding me?", like_count: 5}
]

let postsElements = posts.map(post => <Post message={post.message} like_count={post.like_count}/>)

const MyPosts = (props) => {
  return (
    <div>
      <div>
        All posts
      </div>
      <div className={styless.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
