import React, { useEffect } from 'react';
import '../css/GamePage.css';
import { Link } from 'react-router-dom';

function GamePage() {
  
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
        DIV 1
        <div className="dice-square"></div>
      </div>

      <div className="div-2">
        <table className="renderBoard"></table>
      </div>

      <div className="div-3">DIV 3</div>
    </div>
  );
}

export default GamePage;
