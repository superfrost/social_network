import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux'
import { setProfileIsFetching, getProfile } from './../../redux/profileReduser'
import { withRouter } from "react-router-dom"
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileCotainer extends React.Component {
  componentDidMount() {
    let user_id = this.props.match.params.user_id
    if (!user_id) { user_id = 1 }
    this.props.getProfile(user_id)
  }

  render() {
    //debugger
    if (!this.props.myProfile) {
      return <Preloader/>
    }
    return (
      <div>
        {this.props.profileIsFetching
        ? <Preloader/>
        : <Profile {...this.props} myProfile={this.props.myProfile} />
        }
      </div>
    );
  }
};

let AuthRedirectComponent = withAuthRedirect(ProfileCotainer)

let mapStateToProps = (state) => ({
  myProfile: state.profilePage.myProfile,
  profileIsFetching: state.profilePage.profileIsFetching,
})

let withUrlDataComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
  setProfileIsFetching,
  getProfile
})(withUrlDataComponent);
