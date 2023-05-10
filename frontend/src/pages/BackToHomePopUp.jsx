import "../css/BackToHomePopUp.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

function BackToHomePopUp(props) {

  const {
    players,
    // currentID,
    // setCurrentID,
    removePlayer,
  } = useContext(AppContext);


  async function clearDatabse() {
    // setCurrentID(0);

    var currentID = 0
    for (let i = 0; i < players.length; i++) {
      const id = players[currentID]["_id"];
      removePlayer(id);  
      currentID++;
    }
  }


    return props.trigger ? (
        <div className="backtohome-popup">
            <div className="popup-inner">
                <div className="popup-content">
                    <div className="backtohome-message">
                        Are you sure you want to quit this game?<br />
                        Your game progress will <b>NOT</b> be saved
                    </div>

                    <Link to="/">
                        <button className="backtohome-button" onClick={() => clearDatabse()}>
                            Yes, quit game
                        </button>
                    </Link>

                    <button className="cancel-button"
                        onClick={() => props.setTrigger(false)}>
                        No, resume game
                    </button>
                    {props.children}
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

export default BackToHomePopUp;
