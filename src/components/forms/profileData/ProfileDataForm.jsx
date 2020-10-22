import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../Common/FormsControls/FormControl";
import { TextArea } from "../../Common/FormsControls/FormControl";
import styles from "./../../Profile/ProfileDescription/ProfileDescription.module.scss";
import targetSocialNetworks from "./../../../global/globalSettings";

const ProfileDataForm = ({ handleSubmit }) => {
  let targetContacts = [];
  for (let key in targetSocialNetworks) {
    targetContacts.push(
      <div key={key} className={styles.contact}>
        <Field
          name={targetSocialNetworks[key]}
          component={Input}
          type="text"
          placeholder={`your ${targetSocialNetworks[key]}`}
        />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.title}>Profile info</p>
        <button>Save</button>
        <p>Full name:</p>
        <div>
          <Field name="fullName" component={Input} type="text" />
        </div>
        <p>About me:</p>
        <div>
          <Field name="aboutMe" component={Input} type="text" />
        </div>
      </div>
      <div className={styles.jobInfo}>
        <p className={styles.title}>Job Info</p>
        <p>Are you looking for a job?</p>
        <div>
          <Field name="lookingForAJob" component={Input} type="checkbox" />
        </div>
        <p>Describe your professional skills</p>
        <div>
          <Field
            component={TextArea}
            name="lookingForAJobDescription"
            component={Input}
          />
        </div>
      </div>
      {/* <div>
        <p>Contacts</p>
        {targetContacts}
      </div> */}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "profileData",
})(ProfileDataForm);

export default ProfileDataReduxForm;
