import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 11301;
    usersAPI.getProfile(userId).then((data) => {
      this.props.setProfile(data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setProfile,
})(withUrlDataContainerComponent);
