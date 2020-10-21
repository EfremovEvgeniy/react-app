import React from "react";
import styles from "./ProfileDescription.module.scss";
import Loader from "../../Loader/Loader";
import JobInfo from "./JobInfo/JobInfo";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UploadFile from "../../forms/uploadFile/UploadFile";
import { useState } from "react";
import ProfileDataReduxForm from "../../forms/profileData/ProfileDataForm";

const ProfileDescription = (props) => {
  let defaultAva = "https://avatarfiles.alphacoders.com/693/69306.jpg";

  let [editMode, setEditMode] = useState(false);
  // let [status, setStatus] = useState(props.status);

  // useEffect(() => {
  //   setStatus(props.status);
  // }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };
  // let deactivateEditMode = () => {
  //   if (status && status.length > 0) {
  //     setEditMode(false);
  //   }
  //   props.updateProfileStatus(status);
  // };
  // let updateStatus = (e) => {
  //   setStatus(e.currentTarget.value);
  // };

  if (!props.profile) {
    return <Loader />;
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
      {editMode ? (
        <ProfileDataReduxForm profile={props.profile} />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          activateEditMode={activateEditMode}
        />
      )}
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.title}>Profile info</p>
        {props.isOwner && (
          <button onClick={props.activateEditMode} className={styles.edit}>
            Edit
          </button>
        )}
        <p>Full name: {props.profile.fullName}</p>
        {props.profile.aboutMe && <p>About me:{props.profile.aboutMe}</p>}
        <ProfileStatusWithHooks
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        />
      </div>
      <JobInfo
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
      />
      <ProfileContacts contacts={props.profile.contacts} />
    </div>
  );
};

export default ProfileDescription;
