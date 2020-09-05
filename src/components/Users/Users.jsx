import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";
import Loader from "../Loader/Loader";

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
      {props.isFetching ? (
        <Loader />
      ) : (
        props.users.map((u) => (
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
            isFollowing={props.isFollowing}
            toggleIsFollowing={props.toggleIsFollowing}
          />
        ))
      )}
      <div className={styles.pagesWrapper}>
        {limitPages.map((p) => (
          <span
            key={p}
            className={
              props.currentPage === p ? styles.selectedPage : undefined
            }
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
