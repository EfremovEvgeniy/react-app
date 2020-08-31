import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Users</div>
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
