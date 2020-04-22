import React from 'react'
import { connect } from 'react-redux'
import { followAC, unFollowAC, setUsersAC, 
  setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReduser'
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:5000/users?pageSize=${this.props.pageSize}&currentPage=${this.props.currentPage}`)
      .then((response) => {
        this.props.setUsers(response.data.users);
        this.props.setTotalUsersCount(response.data.totalUsersCount);
    });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`http://localhost:5000/users?pageSize=${this.props.pageSize}&currentPage=${pageNumber}`)
      .then((response) => {
        this.props.setUsers(response.data.users);
    });
  };

  render() {
    return <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      unFollow={this.props.unFollow}
      follow={this.props.follow}
    />
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)