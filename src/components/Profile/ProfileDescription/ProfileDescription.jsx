import React from "react";
import styles from "./ProfileDescription.module.scss";
import Loader from "../../Loader/Loader";
import ProfileStatus from "./ProfileStatus";

const ProfileDescription = (props) => {
  let defaultAva = "https://avatarfiles.alphacoders.com/693/69306.jpg";

  if (!props.profile) {
    return <Loader />;
  }
  let contacts;
  if (!Object.keys(props.profile.contacts).length) {
    contacts = (
      <div className={styles.contacts}>
        <p className={styles.title}>Contacts</p>
        <p className={styles.facebook}>
          <a href={props.profile.contacts.facebook}>
            {props.profile.contacts.facebook}
          </a>
        </p>
        <p className={styles.github}>
          <a href={props.profile.contacts.github}>
            {props.profile.contacts.github}
          </a>
        </p>
        <p className={styles.twitter}>
          <a href={props.profile.contacts.twitter}>
            {props.profile.contacts.twitter}
          </a>
        </p>
        <p className={styles.instagram}>
          <a href={props.profile.contacts.instagram}>
            {props.profile.contacts.instagram}
          </a>
        </p>
      </div>
    );
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
        <ProfileStatus status={props.profile.aboutMe} />
      </div>
      <div className={styles.jobInfo}>
        <p className={styles.title}>Job Info</p>
        <p>
          {props.profile.lookingForAJob ? "Open to work" : "Don't search work"}
        </p>
        <i>{props.profile.lookingForAJobDescription}</i>
      </div>
      {contacts}
    </div>
  );
};

export default ProfileDescription;
