import React from "react";
import styles from "./ProfileStatus.module.scss";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && this.props.status && (
          <div className={styles.status}>
            <q onDoubleClick={this.activateEditMode}>{this.props.status}</q>
          </div>
        )}
        {this.state.editMode ||
          (!this.props.status && (
            <div>
              <textarea
                onBlur={this.deactivateEditMode}
                autoFocus={true}
                type="text"
                value={this.props.status}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default ProfileStatus;
