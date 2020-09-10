import React from "react";
import styles from "./ProfileStatus.module.scss";

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.deactivateEditMode = this.deactivateEditMode.bind(this);
    this.activateEditMode = this.activateEditMode.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }
  state = {
    editMode: true,
  };
  activateEditMode = (event) => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode(event) {
    if (this.props.status && this.props.status.length > 0) {
      this.setState({
        editMode: false,
      });
    }
  }
  updateStatus(event) {
    this.props.updateStatus(event.target.value);
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
            <textarea
              onBlur={this.deactivateEditMode}
              onChange={this.updateStatus}
              autoFocus={true}
              type="text"
              value={this.props.status || undefined}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
