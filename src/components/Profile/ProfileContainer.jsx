import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from 'react-redux'
import { setUserProfile } from './../../redux/profileReduser'
import Preloader from "../Common/Preloader/Preloader";

class ProfileCotainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:5000/profile/2`)
      .then(response => {
        //debugger
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    debugger
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

export default connect(mapStateToProps, {setUserProfile})(ProfileCotainer);
