import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../Common/FormsControls/FormControl";
import { TextArea } from "../../Common/FormsControls/FormControl";
import styles from "./../../Profile/ProfileDescription/ProfileDescription.module.scss";

const ProfileDataForm = (props) => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.title}>Profile info</p>
        <button>Save</button>
        <p>{props.profile.fullName}</p>
        <div>
          <Field
            name="fullName"
            component={Input}
            type="text"
            placeholder={props.profile.fullName}
            validate={[]}
          />
        </div>
        <p>About me:</p>
        <div>
          <Field
            name="aboutMe"
            component={Input}
            type="text"
            placeholder={props.profile.aboutMe}
            validate={[]}
          />
        </div>
        {/* <ProfileStatusWithHooks
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        /> */}
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
            name="professionalSkills"
            component={Input}
          />
        </div>
      </div>
      {/* <JobInfo
        lookingForAJob={props.profile.lookingForAJob}
        lookingForAJobDescription={props.profile.lookingForAJobDescription}
      /> */}
      {/* <ProfileContacts contacts={props.profile.contacts} /> */}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "profileData",
})(ProfileDataForm);

export default ProfileDataReduxForm;
