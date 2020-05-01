import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Profile = (props) => {
  //debugger
  return (
    <div>
      <MyProfile 
        myProfile={props.myProfile}
        status={props.status}
        updateStatus={props.updateStatus} />
      <CreatePostContainer/>
      <MyPosts posts={props.profilePage.posts}
        friends={props.profilePage.friends} />
    </div>
  );
};

export default Profile;
