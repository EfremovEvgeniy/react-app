import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";
import * as axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  let usersElements = props.users.map((u) => (
    <User
      name={u.name}
      id={u.id}
      status={u.status}
      key={u.id}
      followed={u.followed}
      uniqueUrlName={u.uniqueUrlName}
      photos={u.photos}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
    />
  ));
  console.log(usersElements);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Users</div>
      {usersElements}
    </div>
  );
};

export default Users;
