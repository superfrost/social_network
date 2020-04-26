import React from "react";
import Header from "./Header";
import * as axios from 'axios'
import {connect} from "react-redux";
import { setAuthUserData } from './../../redux/authReduser'

//https://social-network.samuraijs.com/api/1.0/auth/me
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:5000/auth/me`, {
      //withCredentials: true
    })
      .then(response => {
        debugger;
        if (response.data.resultCode === 0) {
          //debugger;
          let {id, email, login}  = response.data.data
          let userPhoto = null
          this.props.setAuthUserData(id, email, login, userPhoto)
          //if (id > 1000) { id = 3 }
          axios.get(`http://localhost:5000/profile/${id}`)
            .then(response => {
              debugger
              userPhoto = response.data.photo_src
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
