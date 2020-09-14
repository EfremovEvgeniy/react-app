import React from "react";
import styles from "./ProfileDescription.module.scss";
import Loader from "../../Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import JobInfo from "./JobInfo/JobInfo";
import ProfileContacts from "./ProfileContacts/ProfileContacts";

const ProfileDescription = (props) => {
  let defaultAva = "https://avatarfiles.alphacoders.com/693/69306.jpg";

  if (!props.profile) {
    return <Loader />;
  }
  let contacts;
  if (Object.keys(props.profile.contacts).length > 0) {
    contacts = <ProfileContacts contacts={props.profile.contacts} />;
  } else {
    contacts = false;
  }
  return (
    <div className={styles.profile}>
      <div className={styles.ava}>
        <img src={props.profile.photos.large || defaultAva} alt="avatar" />
      </div>
      <div className={styles.description}>
        <p className={styles.title}>Profile info</p>
        <p>{props.profile.fullName}</p>
        <ProfileStatus
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        />
      </div>
      <JobInfo
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
      />
      {contacts}
    </div>
  );
};

export default ProfileDescription;
