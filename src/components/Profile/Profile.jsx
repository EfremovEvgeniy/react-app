import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.ava}>
          <img
            src="https://avatarfiles.alphacoders.com/693/69306.jpg"
            alt="avatar"
          />
        </div>
        <div className={styles.description}>
          <p>My profile</p>
        </div>
      </div>
      <MyPosts />
    </main>
  );
};

export default Profile;
