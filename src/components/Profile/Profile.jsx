import React from "react";
import styless from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Profile = (props) => {
  return (
    <div>
      <MyProfile state={props.state.myProfile}/>
      <CreatePostContainer
        //store={props.store}
        // state={props.state}
        // dispatch={props.dispatch}
        // addNewPost={props.addNewPost} 
        // newPostTextOnChenge={props.newPostTextOnChenge}
      />
      <MyPosts state={props.state}/>
    </div>
  );
};

export default Profile;
