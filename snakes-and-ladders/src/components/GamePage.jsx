import "../css/GamePage.css";
import { Link } from "react-router-dom";
import TutorialPopUp from "./TutorialPopUp";
import { useState } from "react";

function GamePage() {
  const [tutorialButtonPopup, setTutorialButtonPopup] = useState(false);
  return (
    <div>
      <div>This is the main game</div>

      <Link to="/">
        <button>BACK TO HOME</button>
      </Link>

      {/* POPOVER NOT IMPLEMENTED */}
      <button>SETTINGS</button>

      {/* POPOVER NOT IMPLEMENTED */}
      <button onClick={() => setTutorialButtonPopup(true)}>HOW TO PLAY</button>
      <TutorialPopUp
        trigger={tutorialButtonPopup}
        setTrigger={setTutorialButtonPopup}
      ></TutorialPopUp>

      <Link to="/results">
        <button>RESULTS</button>
      </Link>
    </div>
  );
}

export default GamePage;
