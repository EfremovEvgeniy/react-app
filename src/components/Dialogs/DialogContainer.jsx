import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessageText,
} from "./../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
    updateNewMessageText,
  }),
  withAuthRedirect
)(Dialogs);
