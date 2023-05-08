import "../css/SettingsPopUp.css";

function SettingsPopUp(props) {
  return props.trigger ? (
    <div className="settings-popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {'<'}
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
              <button className="play-speed-button">1 x</button>
              <button className="play-speed-button">1.5 x</button>
              <button className="play-speed-button">2 x</button>
            </div>

          </div>

          <div className="vl"/>

          <div className="div-exit-buttons">
            <button className="exit-button">RESUME</button>
            <button className="exit-button">RESTART</button>
            <button className="exit-button" onClick={() => props.setTrigger(false)}>
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
