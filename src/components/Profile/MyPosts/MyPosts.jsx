import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'
import Preloader from '../../Common/Preloader/Preloader'


const MyPosts = (props) => {
  if (!props.posts ) {
    return <Preloader />
  }
  if(!props.friends || props.friends.length === 0) {
    return <Preloader />
  }
  debugger
  let postsElements = props.posts.map(post => {
    let posterName = props.friends[post.person_id - 1].name;
    let photo_src = props.friends[post.person_id - 1].photo_src;
      return <Post state={post} name={posterName} photoSrc={photo_src}/>
  });
  let postsElementsReverse = postsElements.slice().reverse();
  
  return (
    <div>
      <div className={styless.posts}>
        {postsElementsReverse}
      </div>
    </div>
  )
}

export default React.memo(MyPosts)
