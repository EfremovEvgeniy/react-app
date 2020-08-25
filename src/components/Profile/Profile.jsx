import React from "react";
import styles from "./Profile.module.scss";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileDescription
        avaUrl="https://avatarfiles.alphacoders.com/693/69306.jpg"
        name="Efremov Evgenii"
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
