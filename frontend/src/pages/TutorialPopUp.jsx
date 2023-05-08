import "../css/TutorialPopUp.css";
import BoardImage from "../assets/board.png";

function TutorialPopUp(props) {
  return props.trigger ? (
    <div className="tutorial-popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h1>HOW TO PLAY</h1>
        <div className="tutorial-content">
          <div className="example-image">
            <img src={BoardImage} width="360" height="360" />
          </div>
          <div className="instruction">
            <p>
              Reach the end of the Board <br></br> launching the Dice.
            </p>
            <p>
              Rolling a 6 will give <br></br> the player an extra dice!
            </p>
            <p>
              Ladder: You go up! <br></br> Snake: You go down!
            </p>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default TutorialPopUp;
