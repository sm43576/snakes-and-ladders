import "../css/RollDice.css";
import Die from "./Die";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";

function RollDice() {
  const { currentID, setCurrentID, nextID, setNextID, players, movePlayer } =
    useContext(AppContext);

  // Face numbers passes as default props
  const sides = ["one", "two", "three", "four", "five", "six"];

  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("two");
  const [rolling, setRolling] = useState(false);

  function roll() {
    const s1 = (Math.floor(Math.random() * sides.length));
    const s2 = (Math.floor(Math.random() * sides.length));
    setDie1(sides[s1]);
    setDie2(sides[s2]);
    setRolling(true);

    // Start timer of one sec when rolling start
    // Set rolling to false again when time over
    setTimeout(() => {
      setRolling(false);
      // setCurrentID(currentID + 1);
      // setNextID(nextID + 1);
      checkValidIDs(currentID + 1, nextID + 1);
    }, 1000);
    
    step(s1+1, s2+1);
  }

  function checkValidIDs(current, next) {
    if (current >= players.length) {
      setCurrentID(0);
      setNextID(1);
    } else if (next >= players.length) {
      setCurrentID(current);
      setNextID(0);
    } else {
      setCurrentID(current);
      setNextID(next);
    }
  }

  const handleBtn = rolling ? "RollDice-rolling" : "";

  function step(step1, step2) {
    var step = step1 + step2
    const id = players[currentID]["_id"];
    const para = players[currentID]["placement"] + step;
    movePlayer(id, para);
  }

  return (
    <div className="RollDice">
      <button
        className={handleBtn}
        // disabled={this.state.rolling}
        onClick={() => {
          roll();
        }}>
        {rolling ? "Rolling" : "Click to Roll!"}
      </button>

      <div className="RollDice-container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
    </div>
  );
}

export default RollDice;
