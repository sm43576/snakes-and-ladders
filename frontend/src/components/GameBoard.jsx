import { useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";
import "../css/GameBoard.css";

function GameBoard() {
  const { players, currentID, editPlayer } = useContext(AppContext);

  function matchPlayer(num) {
    var avatars = [];

    for (let i = 0; i < players.length; i++) {
      console.log("-------BEFORE--------");
      console.log(i + ": " + players[i]["image"]);
      console.log("NUM " + num);
      console.log("PLACEMENT " + players[i]["placement"]);
      console.log("-------AFTER--------");

      if (num == players[i]["placement"]) {
        avatars.push(players[i]["image"]);
        console.log("INSIDE IF");
      }
    }

    return avatars;
  }

  useEffect(() => {
    const renderBoard = () => {
      // console.log(players[currentID]["name"]);
      // console.log(players[currentID]["placement"]);
      // console.log(players[currentID]["image"]);

      const playerPlacement = players[currentID]["placement"];

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
            var avatars = matchPlayer(num);
            if (avatars.length > 0) {
              console.log("avatar length > 0");
              var avatar = `url(/src/assets/selectable_avatars/${avatars[0]})`;
              td.style.backgroundImage = (avatar, avatar);
            }
            num--;
          } else {
            if (newRow) {
              num -= 9;
              newRow = false;
            }
            var avatars = matchPlayer(num);
            if (avatars.length > 0) {
              console.log("avatar length > 0");
              var avatar = `url(/src/assets/selectable_avatars/${avatars[0]})`;
              td.style.backgroundImage = (avatar, avatar);
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
  }, [players]);

  return (
    <div>
      <table className="renderBoard"></table>
    </div>
  );
}

export default GameBoard;
