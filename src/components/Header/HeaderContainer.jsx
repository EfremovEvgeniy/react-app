import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { setUserData, setCurrentUser } from "./../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setUserData(id, email, login);
        }
      });
  }
  componentDidUpdate() {
    if (this.props.isAuth) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
        )
        .then((response) => {
          this.props.setCurrentUser(response.data);
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
