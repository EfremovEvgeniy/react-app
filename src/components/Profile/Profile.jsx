import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main>
      <div className={s.wrapper}>
        <div className={s.ava}>
          <img src="https://avatarfiles.alphacoders.com/693/69306.jpg" alt="" />
        </div>
        <div className={s.description}>
          <p>My profile</p>
        </div>
      </div>
      <MyPosts />
    </main>
  );
};

export default Profile;
