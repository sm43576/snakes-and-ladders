import "../css/SettingsPopUp.css";
import React from "react";

function SettingsPopUp(props) {
  return props.trigger ? (
    <div className="settings-popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h1>Settings hello hello</h1>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default SettingsPopUp;
