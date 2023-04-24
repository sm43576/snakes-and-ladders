import "../css/GamePage.css"
import { Link } from "react-router-dom"
import React, { useEffect } from 'react';

// import homeIcon from "../images/home.png"


function GamePage() {
  document.body.style.backgroundColor = "#A5ACCD";

  const renderBoard = () => { // eventually would need to pass through snakes & ladder placements, and player placements
    const table = document.createElement('table');

    let num = 100;

    // add 10 rows and 10 columns to the table
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr');
      let newRow = true;
      if (i == 0) {
        newRow = false;
      }
      for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');

        if (i % 2 == 0) { // even rows
          if (newRow) {
            num -= 11;
            newRow = false;
          }
          td.textContent = num;
          num--;
        } else {
          if (newRow) {
            num -= 9;
            newRow = false;
          }
          td.textContent = num;
          num++;
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);

      newRow = false;
    }

    return table;
  };


  useEffect(() => {
    const renderBoardDiv = document.querySelector('.renderBoard');
    if (renderBoardDiv.children.length === 0) {
      const table = renderBoard();
      renderBoardDiv.appendChild(table);
    }
  }, []);

  return (
    <div className="game-page">

      <div className="div-1">

        <div className="dice-square">
          <p className="roll-dice-msg">Click to Roll!</p>
        </div>

        <div className="div-players">
          <p className="current-player-tag">Current Player:</p>
          <div className="current-player">
          </div>
        </div>

        <div className="circle-80 white-bgr" />
        <div className="circle-80 white-bgr" />
        <div className="circle-80 white-bgr" />

      </div>



      <div className="div-2">
        <table className="renderBoard"></table>
      </div>



      <div className="div-3">

        <div className="left">
          <Link to="/">
            <button className="circle-80 gold-dark-bgr home btn"/>
          </Link>
        </div>

        {/* POPOVER NOT IMPLEMENTED */}
        <div className="right">

          <button className="circle-80 purple-light-bgr settings btn"/>
        </div>

        {/* POPOVER NOT IMPLEMENTED */}
        <div className="left">

          <button className="circle-80 white-bgr tutorial btn"/>
        </div>
        <Link to="/results">
          <button className="circle-80 btn">
            R
          </button>
        </Link>


      </div>

    </div>
  )
}

export default GamePage