import { useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";
import "../css/GameBoard.css";

function GameBoard() {
  const { currentID, players } = useContext(AppContext);

  function matchPlayer(num, dice) {
    for (let i = 0; i < players.length; i++) {
      if (num == players[i]["placement"] + dice) {
        return players[currentID]["image"];
      } else {
        return null;
      }
    }
  }

  useEffect(() => {
    const renderBoard = () => {
      console.log(players[currentID]["name"]);
      console.log(players[currentID]["placement"]);
      console.log(players[currentID]["image"]);

      const dice = 13;

      const table = document.createElement("table");
      let num = 100;

      for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        let newRow = true;

        if (i === 0) {
          newRow = false;
        }

        for (let j = 0; j < 10; j++) {
          const td = document.createElement("td");

          if (i % 2 === 0) {
            if (newRow) {
              num -= 11;
              newRow = false;
            }
            if (matchPlayer(num, dice) != null) {
              td.style.backgroundImage = `url(/src/assets/selectable_avatars/${matchPlayer(
                num,
                dice
              )})`;
              console.log(matchPlayer(num, dice));
            }
            num--;
          } else {
            if (newRow) {
              num -= 9;
              newRow = false;
            }
            if (matchPlayer(num, dice) != null) {
              td.style.backgroundImage = `url(/src/assets/selectable_avatars/${matchPlayer(
                num,
                dice
              )})`;
              console.log(matchPlayer(num, dice));
            }
            num++;
          }

          tr.appendChild(td);
        }

        table.appendChild(tr);
        newRow = false;
      }

      return table;
    };

    const renderBoardDiv = document.querySelector(".renderBoard");
    if (renderBoardDiv.children.length === 0) {
      const table = renderBoard();
      renderBoardDiv.appendChild(table);
    }
  }, [currentID, players]);

  return (
    <div>
      <table className="renderBoard"></table>
    </div>
  );
}

export default GameBoard;
