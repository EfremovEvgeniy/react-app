import React from "react";
import { connect } from "react-redux";
import { setUserData, setCurrentUser } from "./../../redux/auth-reducer";
import Header from "./Header";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }
  componentDidUpdate() {
    if (this.props.isAuth && !this.props.currentUser) {
      usersAPI.getProfile(this.props.userId).then((data) => {
        this.props.setCurrentUser(data);
      });
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
  setUserData,
  setCurrentUser,
})(HeaderContainer);
