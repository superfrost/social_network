import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { setAuthUserData, getAuthUserData, logoutUser } from './../../redux/authReduser'

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userPhoto: state.auth.userPhoto
})

export default connect(mapStateToProps, {
  setAuthUserData,
  logoutUser,
} )(HeaderContainer);
