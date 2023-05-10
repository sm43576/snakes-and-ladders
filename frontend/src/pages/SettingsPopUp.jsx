import "../css/SettingsPopUp.css";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";
import settingsColour from "../assets/settings_colour.png";

function SettingsPopUp(props) {
  return props.trigger ? (
    <div className="settings-popup">
      <div className="popup-inner">
        <div className="header-container">
          <div className="settings-header">
          <h1>SETTINGS<img className="settings-colour" src={settingsColour} /></h1>
          </div>
          <h2>PAUSED</h2>
        </div>
        <div className="settings-container">
          <div className="div-adjustments">
            <div className="two-columns-grid">
              <div>
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
                </div>
              </div>

              <div>
                <div className="overall-volume">
                    <p> pl</p>
                  </div>
                  <div className="sfx-volume">
                    <p> pl</p>
                  </div>
                  <div className="music-volume">
                    <p> pl</p>
                  </div>
                  <div className="play-speed">
                    <button className="play-speed-button">1 x</button>
                    <button className="play-speed-button">1.5 x</button>
                    <button className="play-speed-button">2 x</button>
                  </div>
              </div>
            </div>
          </div>

          <div className="vl"/>

          <div className="div-exit-buttons">
            <button className="exit-button" onClick={() => props.setTrigger(false)}>RESUME</button>
            <button className="exit-button" onClick={() => props.setTrigger(false)}>RESTART</button>
            <button className="exit-button">QUIT</button>
          </div>
        </div>        
        {props.children}
      </div>

      <div>
        <img className="bubble-top-left" src={bubbleCornerTop} />
        <button className="back-btn" onClick={() => props.setTrigger(false)}>
          {'<'}
        </button>
      </div>

      <div>
        <div className="placing-btn" ></div>
        <img className="bubble-bot-right" src={bubbleCornerBtm} />
      </div>
    </div>
  ) : (
    ""
  );
}

export default SettingsPopUp;
