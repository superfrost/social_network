import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Profile = (props) => {
  //debugger
  return (
    <div>
      <MyProfile state={props.state.myProfile} myProfile={props.myProfile}/>
      <CreatePostContainer/>
      {/* <MyPosts state={props.state}/> */}
    </div>
  );
};

export default Profile;
