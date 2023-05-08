import "../css/SettingsPopUp.css";
import React from "react";

function SettingsPopUp(props) {
  return props.trigger ? (
    <div className="settings-popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h1>SETTINGS</h1>
        <h2>PAUSED</h2>

        <div className="settings-container">
          <div className="div-adjustments">
            <div className="overall-volume">
              <p>Overall Volume</p>
            </div>
            <div className="sfx-volume">
              <p>SFX Volume</p>
            </div>
            <div className="music-volume">
              <p>Music Volume</p>
            </div>
            <div className="play-speed">
              <p>Play Speed</p>
              <button className="1-times">1 x</button>
              <button className="1.5-times">1.5 x</button>
              <button className="2-times">2 x</button>
            </div>
          </div>

          <div class="vl"></div>

          <div className="div-exitbuttons">
            <button className="resume">RESUME</button>
            <button className="restart">RESTART</button>
            <button className="quit" onClick={() => props.setTrigger(false)}>
              QUIT
            </button>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default SettingsPopUp;