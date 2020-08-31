import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let limitPages = pages.slice(0, 10);
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Users</div>
        <div className={styles.pagesWrapper}>
          {limitPages.map((p) => (
            <span
              className={this.props.currentPage === p && styles.selectedPage}
              onClick={() => {
                this.onPageChanged(p);
              }}
            >
              {p}
            </span>
          ))}
        </div>
        {this.props.users.map((u) => (
          <User
            name={u.name}
            id={u.id}
            status={u.status}
            key={u.id}
            followed={u.followed}
            uniqueUrlName={u.uniqueUrlName}
            photos={u.photos}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        ))}
      </div>
    );
  }
}

export default Users;
