import React from "react";
import CreatePost from './CreatePost'
import { sendPost } from "../../../redux/profileReduser";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage,
    user_id: state.auth.id
  }
};

export default connect(mapStateToProps, {sendPost})(CreatePost);
