import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalCountAC,
  toggleIsfetchingAC,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsfetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsfetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsfetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsfetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div>
        <Users
          currentPage={this.props.currentPage}
          users={this.props.users}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          isFetching={this.props.isFetching}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => {
      dispatch(followAC(id));
    },
    unfollowUser: (id) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalCountAC(count));
    },
    toggleIsfetching: (value) => {
      dispatch(toggleIsfetchingAC(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
