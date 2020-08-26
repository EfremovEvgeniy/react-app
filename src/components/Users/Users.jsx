import React from "react";
import styles from "./Users.module.scss";
import User from "./User/User";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Efrem",
        status: "I'm all right",
        followed: false,
        location: { city: "Bryansk", country: "Russia" },
        avaUrl:
          "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
      },
      {
        id: 2,
        fullName: "Oleg Ivanov",
        status: "Free Pussy Riot",
        followed: true,
        location: { city: "Kiev", country: "Ukraine" },
        avaUrl:
          "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
      },
      {
        id: 3,
        fullName: "Anton Petrov",
        status: "Belarus JiVE",
        followed: false,
        location: { city: "Minsk", country: "Belorus" },
        avaUrl:
          "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png",
      },
      {
        id: 4,
        fullName: "Artem Lebedev",
        status: "Fuck you",
        followed: true,
        location: { city: "Moscow", country: "Russia" },
        avaUrl:
          "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
      },
    ]);
  }

  let usersElements = props.users.map((u) => (
    <User
      fullName={u.fullName}
      id={u.id}
      status={u.status}
      key={u.id}
      followed={u.followed}
      location={u.location}
      avaUrl={u.avaUrl}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Users</div>
      {usersElements}
    </div>
  );
};

export default Users;
