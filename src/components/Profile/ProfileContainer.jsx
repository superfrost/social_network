import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux'
import { setProfileIsFetching, getProfile, 
  getStatus, updateStatus, getPosts } from './../../redux/profileReduser'
import { withRouter } from "react-router-dom"
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from 'redux'

class ProfileCotainer extends React.Component {
  componentDidMount() {
    let user_id = this.props.match.params.user_id
    if (!user_id) {
      user_id = this.props.authUserId
      if(!user_id) {
        this.props.history.push("/login")
      }
    }
    
    this.props.getProfile(user_id)
    this.props.getStatus(user_id)
    if (user_id) {
    this.props.getPosts(user_id)
    }   
  }

  render() {
    if (!this.props.myProfile) {
      return <Preloader/>
    }
    return (
      <div>
        {this.props.profileIsFetching
        ? <Preloader/>
        : <Profile {...this.props} 
          myProfile={this.props.myProfile} 
          status={this.props.status}
          updateStatus={this.props.updateStatus}/>
        }
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
  myProfile: state.profilePage.myProfile,
  profileIsFetching: state.profilePage.profileIsFetching,
  status: state.profilePage.status,
  profilePage: state.profilePage,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth
}}

export default compose(
  connect(mapStateToProps, {
    setProfileIsFetching,
    getProfile,
    getStatus,
    updateStatus,
    getPosts
  }),
  withRouter,
  withAuthRedirect
)(ProfileCotainer);
