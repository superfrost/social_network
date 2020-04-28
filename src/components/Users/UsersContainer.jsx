import React from 'react'
import { connect } from 'react-redux'
import { follow, unFollow, setUsers, 
  setCurrentPage, setTotalUsersCount, 
  setToggleIsFetching } from '../../redux/usersReduser'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(this.props.isFetching)
    
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        //debugger
        this.props.setToggleIsFetching(this.props.isFetching);
        this.props.setUsers(data.users);
        this.props.setTotalUsersCount(data.totalUsersCount);
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setToggleIsFetching(this.props.isFetching)
    this.props.setCurrentPage(pageNumber)
    
    usersAPI.getUsers(this.props.pageSize, pageNumber)
      .then((data) => {
        this.props.setToggleIsFetching(this.props.isFetching)
        this.props.setUsers(data.users);
      });
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
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleIsFetching,
  })(UsersContainer);