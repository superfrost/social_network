import React from "react";
import styless from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";

const CreatePost = (props) => {

  // let addPost = () => {
  //   let text = document.getElementById('new_text_area').value;
  //   alert(text)
  // }

  let newPostElement = React.createRef()
  let addPost2 = () => {
    let text2 = newPostElement.current.value
    alert(text2)
  }

  return (
    <div>
      <div className={styless.my_event_text}>
        <textarea ref={newPostElement} id="new_text_area" placeholder="Enter your event..."></textarea>
      </div>
      <div>
        <button onClick={addPost2} className={styless.send_button}>Send</button>
      </div>
    </div>
  )
}

const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          className={styless.back_img}
          alt="background"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zicasso.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_2048custom_zictheme_breakpoint_standard_1x%2Fpublic%2Fheaderimages%2Ftours%2FSeychelles-Beautiful-Beach-Pano.jpg%3Ftimestamp%3D1382001009&f=1&nofb=1"
          />
      </div>
      <MyProfile state={props.state.myProfile}/>
      <CreatePost/>   
      <MyPosts state={props.state}/>
    </div>
  );
};

export default Profile;
