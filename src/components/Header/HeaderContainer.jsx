import React from "react";
import { connect } from "react-redux";
import { setCurrentUser, authUser } from "./../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }
  componentDidUpdate() {
    if (this.props.isAuth && !this.props.currentUser) {
      this.props.setCurrentUser(this.props.userId);
    }
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    isCurrentUserSetted: state.auth.isCurrentUserSetted,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, {
  setCurrentUser,
  authUser,
})(HeaderContainer);
