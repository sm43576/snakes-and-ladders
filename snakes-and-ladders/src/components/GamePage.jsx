import "../css/GamePage.css";
import { Link } from "react-router-dom";
import SettingsPopUp from "./SettingsPopUp";
import { useState } from "react";

function GamePage() {
  const [settingsButtonPopup, setSettingsButtonPopup] = useState(false);
  return (
    <div>
      <div>This is the main game</div>

      <Link to="/">
        <button>BACK TO HOME</button>
      </Link>

      {/* POPOVER NOT IMPLEMENTED */}
      <button onClick={() => setSettingsButtonPopup(true)}>SETTINGS</button>
      <SettingsPopUp
        trigger={settingsButtonPopup}
        setTrigger={setSettingsButtonPopup}
      ></SettingsPopUp>

      {/* POPOVER NOT IMPLEMENTED */}
      <button>HOW TO PLAY</button>

      <Link to="/results">
        <button>RESULTS</button>
      </Link>
    </div>
  );
}

export default GamePage;
