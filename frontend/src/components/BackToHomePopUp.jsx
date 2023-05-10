import "../css/BackToHomePopUp.css";
import { Link } from "react-router-dom";

function BackToHomePopUp(props) {
    return props.trigger ? (
        <div className="backtohome-popup">
            <div className="popup-inner">
                <div className="popup-content">
                    <div className="backtohome-message">
                        Are you sure you want to quit this game?<br />
                        Your game progress will <b>NOT</b> be saved
                    </div>

                    <Link to="/">
                        <button className="backtohome-button" onClick={() => props.setTrigger(false)}>
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
