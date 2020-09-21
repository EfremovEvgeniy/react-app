import React from "react";
import { connect } from "react-redux";
import {
  toggleIsFollowing,
  getUsers,
  unfollowUser,
  followUser,
} from "../../redux/users-reducer";
import Users from "./Users";
import {
  getAllUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getIsFollowing,
} from "../../redux/users-selectors";

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
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  toggleIsFollowing,
  getUsers,
})(UsersContainer);
