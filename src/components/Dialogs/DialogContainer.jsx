import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessageText,
} from "./../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  updateNewMessageText,
})(Dialogs);

export default DialogsContainer;
