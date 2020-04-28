import React from 'react'
import { connect } from 'react-redux'
import { follow, unFollow, setCurrentPage, 
  setToggleIsFollowingProgress,
  getUsers } from '../../redux/usersReduser'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {

    this.props.getUsers(this.props.pageSize, this.props.currentPage);
    // this.props.setToggleIsFetching(this.props.isFetching)
    
    // usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
    //   .then((data) => {
    //     //debugger
    //     this.props.setToggleIsFetching(this.props.isFetching);
    //     this.props.setUsers(data.users);
    //     this.props.setTotalUsersCount(data.totalUsersCount);
    //   });
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
    this.props.setCurrentPage(pageNumber)
    // this.props.setToggleIsFetching(true)
    // this.props.setCurrentPage(pageNumber)
    
    // usersAPI.getUsers(this.props.pageSize, pageNumber)
    //   .then((data) => {
    //     this.props.setToggleIsFetching(false)
    //     this.props.setUsers(data.users);
    //   });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  setToggleIsFollowingProgress,
  getUsers,
  })(UsersContainer);