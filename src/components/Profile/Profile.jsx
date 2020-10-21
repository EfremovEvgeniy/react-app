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
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
