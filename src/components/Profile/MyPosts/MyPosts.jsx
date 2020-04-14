import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  //let posterName = props.state.friends
  
  let postsElements = props.state.posts.map(post => {
    let posterName = props.state.friends[post.person_id - 1].name;
    let photoSrc = props.state.friends[post.person_id - 1].photoSrc;
      return <Post state={post} name={posterName} photoSrc={photoSrc}/>
  })

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
