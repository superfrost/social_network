import React from 'react'
import { connect } from 'react-redux'
import { follow, unFollow, setCurrentPage, 
  setToggleIsFollowingProgress,
  getUsers } from '../../redux/usersReduser'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsersSelector, getPageSize,
  getTotalUsersCount, getCurrentPage,getIsFetching,
  getFollowingInProgress, 
  getUsersSel} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
    this.props.setCurrentPage(pageNumber)
  };

  render() {
    console.log("render USERS");
    
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

let mapStateToProps = (state) => {
  console.log("mapStateToProps USERS");
  
  return {
    // users: getUsersSelector(state),
    users: getUsersSel(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setToggleIsFollowingProgress,
    getUsers,
  })
)(UsersContainer);