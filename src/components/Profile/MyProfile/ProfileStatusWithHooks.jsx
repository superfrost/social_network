import React, { useState } from "react";

let ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  //
  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      Status:
      {(!editMode)
      ? <span onDoubleClick={activateEditMode}>
          {" "}{props.status || "****************"}
        </span>
      : <span>
          <input autoFocus={true} 
            value={status} 
            onBlur={deactivateEditMode}
            onChange={onStatusChange} 
            />
        </span>}
    </div>
  );
};

export default ProfileStatusWithHooks;
