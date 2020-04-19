import React from "react";
import CreatePost from './CreatePost'
import { addPostActionCreator, onChangeTextareaActionCreator } from "../../../redux/profileReduser";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    onChangeTextarea: (text) => {
      let action = onChangeTextareaActionCreator(text);
      dispatch(action);
    },
  }
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;
