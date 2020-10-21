import React from "react";
import styles from "./ProfileDescription.module.scss";
import Loader from "../../Loader/Loader";
import JobInfo from "./JobInfo/JobInfo";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UploadFile from "../../forms/uploadFile/UploadFile";

const ProfileDescription = (props) => {
  let defaultAva = "https://avatarfiles.alphacoders.com/693/69306.jpg";

  if (!props.profile) {
    return <Loader />;
  }
  let contacts;
  if (
    Object.values(props.profile.contacts).filter((el) => el !== null).length > 0
  ) {
    contacts = <ProfileContacts contacts={props.profile.contacts} />;
  } else {
    contacts = false;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.ava}>
        <img src={props.profile.photos.large || defaultAva} alt="avatar" />
        {props.isOwner && (
          <UploadFile onMainPhotoSelected={onMainPhotoSelected} />
        )}
      </div>
      <div className={styles.description}>
        <p className={styles.title}>Profile info</p>
        <p>{props.profile.fullName}</p>
        <ProfileStatusWithHooks
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
