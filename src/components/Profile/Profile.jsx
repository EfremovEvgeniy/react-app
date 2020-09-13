import React from "react";
import styles from "./Profile.module.scss";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <ProfileDescription
        profile={props.profile}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
