import React from "react";
import styless from "./../Profile.module.css";
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from "../../../utils/validation";
import { FormControl } from "../../Common/FormsControl/FormsControl";

const maxLength1000 = maxLengthCreator(1000)

//className={styless.my_event_text}
let CreatePostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div >
        <Field name="newPostTextarea" 
          typeField="textarea"
          component={FormControl} 
          placeholder="Your post..."
          validate={[required, maxLength1000]} 
          />
      </div>
      <div>
        <button className={styless.send_button}>Send</button>
      </div>
    </form>
  )
}

CreatePostForm = reduxForm({form: "postsForm"})(CreatePostForm)

const CreatePost = (props) => {

  let addNewPost = (value) => {
    props.addPost(value.newPostTextarea);
  };

  return <CreatePostForm onSubmit={addNewPost}/>
};

export default CreatePost;
