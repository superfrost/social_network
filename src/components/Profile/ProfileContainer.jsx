import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from 'react-redux'
import { setUserProfile } from './../../redux/profileReduser'
import { withRouter } from "react-router-dom"
import Preloader from "../Common/Preloader/Preloader";

class ProfileCotainer extends React.Component {
  componentDidMount() {
    let user_id = this.props.match.params.user_id
    if (!user_id) {
      user_id = 1
    }
    axios.get(`http://localhost:5000/profile/${user_id}`)
      .then(response => {
        //debugger
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    //debugger
    if (!this.props.myProfile) {
      return <Preloader/>
    }
    return (
      <div>
        <Profile {...this.props} myProfile={this.props.myProfile} />
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  myProfile: state.profilePage.myProfile,
})

let withUrlDataComponent = withRouter(ProfileCotainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataComponent);
