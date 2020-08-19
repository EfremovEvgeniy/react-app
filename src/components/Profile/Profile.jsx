import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const ProfileDescription = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.ava}>
        <img src={props.avaUrl} alt="avatar" />
      </div>
      <div className={styles.description}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileDescription
        avaUrl="https://avatarfiles.alphacoders.com/693/69306.jpg"
        name="Efremov Evgenii"
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
