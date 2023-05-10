import "../css/TutorialPopUp.css";
import BoardImage from "../assets/game-board.png";

function TutorialPopUp(props) {
  return props.trigger ? (
    <div className="tutorial-popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {"<"}
        </button>
        <h1>HOW TO PLAY</h1>
        <div className="tutorial-content">
          <div className="example-image">
            <img className="example-image" src={BoardImage} />
          </div>
          <div className="instruction">
            <p>
              Reach the end of the
              <br />
              board launching the Dice. <br />
              <br />
              Rolling a 6 will give
              <br />
              the player an extra dice! <br />
              <br />
              Ladder: You go up! <br /> Snake: You go down! <br />
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
