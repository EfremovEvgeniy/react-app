import React from "react";
import "./ProfileContacts.scss";
import targetSocialNetworks from "./../../../../global/globalSettings";

const ProfileContacts = (props) => {
  let targetContacts = [];
  let contacts = props.contacts;
  for (let key in contacts) {
    if (targetSocialNetworks.includes(key) && contacts.hasOwnProperty(key)) {
      targetContacts.push(
        <p className={`ProfileContacts__${key}`} key={key}>
          <a href={contacts[key]}>
            {contacts[key]}
            {key}
          </a>
        </p>
      );
    }
  }
  return (
    <div className={"ProfileContactsWrapper"}>
      <p className={"ProfileContactsTitle"}>Contacts</p>
      {targetContacts}
    </div>
  );
};

export default ProfileContacts;
