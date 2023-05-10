import "../css/TutorialPopUp.css";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";
import BoardImage from "../assets/board_2.png";
import howToPlay from "../assets/how_to_play.png";

function TutorialPopUp(props) {
  return props.trigger ? (
    <div className="tutorial-popup">
      <div className="popup-inner">
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {'<'}
        </button> */}
        <div className="tutorial-header">
          <h1>HOW TO PLAY<img className="how-to-play" src={howToPlay} /></h1>
        </div>
        <div className="tutorial-content">
          <div className="board-image">
            <img className="board-image" src={BoardImage} />
          </div>
          <div className="instruction">
            <p>
              Reach the end of the<br/>board launching the Dice. <br/><br/>
              Ladder: You go up! <br/> Snake: You go down! <br/>
            </p>
          </div>
        </div>
        {props.children}
      </div>

      <div>
        <img className="bubble-top-left" src={bubbleCornerTop} />
        <button className="back-btn" onClick={() => props.setTrigger(false)}>
          {'X'}
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
