import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
