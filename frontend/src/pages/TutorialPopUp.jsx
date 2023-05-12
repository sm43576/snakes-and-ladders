import "../css/TutorialPopUp.css";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";
import BoardImage from "../assets/game_board.png";
import HowToPlay from "../assets/how_to_play.png";

function TutorialPopUp(props) {
  return props.trigger ? (
    <div className="tutorial-popup">
      <div className="popup-inner">
        <div>
          <div className="tutorial-header">
            <h1>HOW TO PLAY<img className="how-to-play" src={HowToPlay} /></h1>
          </div>
          <div className="tutorial-content">
            <div className="board-image">
              <img className="board-image" src={BoardImage} />
            </div>
            <p className="instruction">
              Roll dice to make you way to the treasure!<br/><br/>
              If you land on a square with seaweed, you slide down.<br/><br/>
              If you land on a square with bubbles, you float up.<br/>
            </p>
          </div>
          {props.children}
        </div>
      </div>

      <div>
        <img className="bubble-top-left" src={bubbleCornerTop} />
        <button className="close-btn" aria-label="closeTutorialBtn" onClick={() => props.setTrigger(false)}>
          {/* {'X'} */}
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

export default TutorialPopUp;
