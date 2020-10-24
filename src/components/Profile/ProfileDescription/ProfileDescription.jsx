import React from "react";
import styles from "./ProfileDescription.module.scss";
import Loader from "../../Loader/Loader";
import JobInfo from "./JobInfo/JobInfo";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import UploadFile from "../../forms/uploadFile/UploadFile";
import { useState } from "react";
import ProfileDataReduxForm from "../../forms/profileData/ProfileDataForm";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileDescription = (props) => {
  let defaultAva = "https://avatarfiles.alphacoders.com/693/69306.jpg";
  let [editMode, setEditMode] = useState(false);
  let activateEditMode = () => {
    setEditMode(true);
  };

  if (!props.profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const deactivateEditMode = () => {
    setEditMode(false);
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
        <ProfileDataReduxForm
          profile={props.profile}
          onSubmit={onSubmit}
          initialValues={props.profile}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          activateEditMode={activateEditMode}
          updateProfileStatus={props.updateProfileStatus}
          status={props.status}
        />
      )}
      {editMode && (
        <button onClick={deactivateEditMode} className={styles.cancelButton}>
          Cancel
        </button>
      )}
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.title}>Profile info</p>
        <p className={styles.infoTitle}>
          Full name: <span>{props.profile.fullName}</span>
        </p>
        {props.profile.aboutMe && (
          <p className={styles.infoTitle}>
            About me: <span>{props.profile.aboutMe}</span>
          </p>
        )}
        <ProfileStatusWithHooks
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        />
      </div>
      {props.isOwner && (
        <button
          onClick={props.activateEditMode}
          className={styles.submitButton}
        >
          Edit
        </button>
      )}
      <JobInfo
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
      />
      <ProfileContacts contacts={props.profile.contacts} />
    </div>
  );
};

export default ProfileDescription;
