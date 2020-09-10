import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfile,
  getProfileStatus,
  updateStatus,
} from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId || 11301);
    this.props.getProfileStatus(this.props.match.params.userId || 11301);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getProfileStatus,
    updateStatus,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
