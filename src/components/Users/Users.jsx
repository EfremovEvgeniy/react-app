import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
            className={props.currentPage === p && styles.selectedPage}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
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
      ))}
    </div>
  );
};

export default Users;
