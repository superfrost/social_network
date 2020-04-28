import React from "react";
import Header from "./Header";
import * as axios from 'axios'
import {connect} from "react-redux";
import { setAuthUserData } from './../../redux/authReduser'
import { usersAPI, authentificateAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authentificateAPI.authentificateMe()
      .then(data => {
        //debugger;
        if (data.resultCode === 0) {
          //debugger;
          let {id, email, login}  = data.data
          let userPhoto = null
          this.props.setAuthUserData(id, email, login, userPhoto)
          usersAPI.getUserProfile(id)
          //axios.get(`http://localhost:5000/profile/${id}`)
            .then(data => {
              //debugger
              userPhoto = data.photo_src
              this.props.setAuthUserData(id, email, login, userPhoto)
            })
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userPhoto: state.auth.userPhoto
})

export default connect(mapStateToProps, {setAuthUserData} )(HeaderContainer);
