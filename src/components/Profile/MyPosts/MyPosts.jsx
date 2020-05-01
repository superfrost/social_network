import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postsElements = props.posts.map(post => {
    let posterName = props.friends[post.person_id - 1].name;
    let photoSrc = props.friends[post.person_id - 1].photoSrc;
      return <Post state={post} name={posterName} photoSrc={photoSrc}/>
  });
  // Reverse posts
  let postsElementsReverse = postsElements.slice().reverse();
  
  return (
    <div>
      <div className={styless.posts}>
        {postsElementsReverse}
      </div>
    </div>
  )
}

export default MyPosts
