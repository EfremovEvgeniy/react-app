import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => {
      dispatch(followAC(id));
    },
    unfollowUser: (id) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
