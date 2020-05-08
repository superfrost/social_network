import React from 'react'
import styless from './MyPosts.module.css'
import Post from './Post/Post'

window.props = []
class MyPosts extends React.PureComponent {
  render() {
    console.log("rerender myPosts");
    console.log(this.props);
    window.props.push(this.props)
      
    let postsElements = this.props.posts.map((post) => {
      let posterName = this.props.friends[post.person_id - 1].name;
      let photoSrc = this.props.friends[post.person_id - 1].photoSrc;
      return <Post state={post} name={posterName} photoSrc={photoSrc} />;
    });
    // Reverse posts
    let postsElementsReverse = postsElements.slice().reverse();

    return (
      <div>
        <div className={styless.posts}>{postsElementsReverse}</div>
      </div>
    );
  }
}

export default MyPosts
