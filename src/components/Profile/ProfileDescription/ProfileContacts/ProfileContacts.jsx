import React from "react";
import styles from "./../ProfileDescription.module.scss";

const ProfileContacts = (props) => {
  return (
    <div className={styles.contacts}>
      <p className={styles.title}>Contacts</p>
      <p className={styles.facebook}>
        <a href={props.contacts.facebook}>{props.contacts.facebook}</a>
      </p>
      <p className={styles.github}>
        <a href={props.contacts.github}>{props.contacts.github}</a>
      </p>
      <p className={styles.twitter}>
        <a href={props.contacts.twitter}>{props.contacts.twitter}</a>
      </p>
      <p className={styles.instagram}>
        <a href={props.contacts.instagram}>{props.contacts.instagram}</a>
      </p>
    </div>
  );
};

export default ProfileContacts;
