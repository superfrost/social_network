import React from "react";

class ProfileStatus extends React.Component {

  statusInputRef = React.createRef()
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  
  render() {
    return (
      <div>
        Status: {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || "****************"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode.bind(this)} 
              value={this.state.status}/>
          </div>
        }
      </div>
    );
  }
};

export default ProfileStatus;
