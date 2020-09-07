import React from "react";
import { connect } from "react-redux";
import {
  toggleIsFollowing,
  getUsers,
  unfollowUser,
  followUser,
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <div>
        <Users
          currentPage={this.props.currentPage}
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          isFetching={this.props.isFetching}
          isFollowing={this.props.isFollowing}
          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
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
    isFollowing: state.usersPage.isFollowing,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  toggleIsFollowing,
  getUsers,
})(UsersContainer);
