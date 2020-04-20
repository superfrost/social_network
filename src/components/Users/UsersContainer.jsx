import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { followAC, unFollowAC, setUsersAC } from '../../redux/usersReduser'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)