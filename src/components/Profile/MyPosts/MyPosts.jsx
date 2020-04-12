import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} like_count={post.like_count}/>)

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
