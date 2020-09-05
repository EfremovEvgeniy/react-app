import React from "react";
import styles from "./User.module.scss";
import defaultAva from "./../../../assets/images/default_ava.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = (props) => {
  let defaultStatus = "I'm all right!";
  let defaultCity = "Moscow";
  let defaultCountry = "Russia";

  return (
    <div className={styles.wrapper}>
      <div className={styles.ava}>
        <NavLink to={"/profile/" + props.id}>
          <img src={props.photos.small || defaultAva} alt="ava" />
        </NavLink>
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
          <span>{props.name}</span>
          <q>{props.status || defaultStatus}</q>
        </div>
        <div className={styles.adress}>
          <div className={styles.city}>
            <span>{defaultCity}</span>
          </div>
          <div className={styles.country}>
            <i>{defaultCountry}</i>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        {props.followed ? (
          <button
            onClick={() => {
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "00c6f00b-4fcb-41a9-bbcc-7704127acd93",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.unfollowUser(props.id);
                  }
                });
            }}
          >
            <span>Unfollow</span>
          </button>
        ) : (
          <button
            onClick={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "00c6f00b-4fcb-41a9-bbcc-7704127acd93",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.followUser(props.id);
                  }
                });
            }}
          >
            <span>Follow</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
