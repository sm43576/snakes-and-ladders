import { useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";
import "../css/GameBoard.css";

function GameBoard() {
  const { currentID, nextID, players, checkValidIDs, editPlayer } = useContext(AppContext);

  useEffect(() => {
    const renderBoard = () => {
      const playerPlacement = players[currentID]["placement"] + 3;
      console.log(players[currentID]["name"]);
      console.log(players[currentID]["placement"]);
      console.log(players[currentID]["image"]);

      const id = players[currentID]["_id"];
      const inputName = players[currentID]["name"];
      const activeAvatar = players[currentID]["image"];
      editPlayer(id, inputName, playerPlacement, activeAvatar);

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
            if (playerPlacement === num) {
              td.style.backgroundImage = `url(/src/assets/selectable_avatars/${players[currentID]["image"]})`;
            }
            num--;
          } else {
            if (newRow) {
              num -= 9;
              newRow = false;
            }
            if (playerPlacement === num) {
              td.style.backgroundImage = `url(/src/assets/selectable_avatars/${players[currentID]["image"]})`;
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
