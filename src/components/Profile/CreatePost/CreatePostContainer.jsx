import React from "react";
import CreatePost from './CreatePost'
import { addPost } from "../../../redux/profileReduser";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage
  }
};

export default connect(mapStateToProps, {addPost})(CreatePost);
