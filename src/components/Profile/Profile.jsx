import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <ProfileDescription
        avaUrl="https://avatarfiles.alphacoders.com/693/69306.jpg"
        name="Efremov Evgenii"
      />
      <MyPosts
        posts={props.profilePage.posts}
        store={props.store}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
