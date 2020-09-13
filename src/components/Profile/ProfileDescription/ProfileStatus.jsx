import React from "react";
import styles from "./ProfileStatus.module.scss";
import TextareaAutosize from "react-textarea-autosize";

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.deactivateEditMode = this.deactivateEditMode.bind(this);
    this.activateEditMode = this.activateEditMode.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }
  state = {
    editMode: false,
    status: this.props.status,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode() {
    if (this.state.status && this.state.status.length > 0) {
      this.setState({
        editMode: false,
      });
      this.props.updateProfileStatus(this.state.status);
    }
  }
  updateStatus(event) {
    this.setState({
      status: event.currentTarget.value,
    });
  }
  render() {
    return (
      <div>
        {!this.state.editMode && this.props.status && (
          <div className={styles.status}>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <TextareaAutosize
              autoFocus
              minRows="2"
              maxLength="300"
              onBlur={this.deactivateEditMode}
              onChange={this.updateStatus}
              value={this.state.status || undefined}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
