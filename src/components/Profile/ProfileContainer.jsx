import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "./../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId || 11301);
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to="/login" />;
    }
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getProfile,
})(withUrlDataContainerComponent);
