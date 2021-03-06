import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";
import Loader from "../Loader/Loader";
import Paginator from "../Common/paginator/Paginator";

const Users = (props) => {
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
            isFollowing={props.isFollowing}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
          />
        ))
      )}
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        portionSize={5}
      />
    </div>
  );
};

export default Users;
