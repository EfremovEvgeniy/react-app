import React from "react";
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = () => {
  let postsData = [
    { id: 1, text: "My first post", likesCount: 1 },
    { id: 2, text: "My second post", likesCount: 5 },
  ];

  return (
    <div className={styles.wrapper}>
      <ProfileDescription
        avaUrl="https://avatarfiles.alphacoders.com/693/69306.jpg"
        name="Efremov Evgenii"
      />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
