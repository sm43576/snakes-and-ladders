import React, { useContext, useEffect } from "react";
import "../css/GameBoard.css";
import { AppContext } from "../AppContextProvider";

const GameBoard = () => {
  const { players } = useContext(AppContext);

  useEffect(() => {
    // console.log("imported players: ");
    for (let i = 0; i < players.length; i++) {
      // console.log(players[i]["name"] + ": " + players[i]["placement"]);
    }

    const renderBoardDiv = document.querySelector(".renderBoard");
    if (renderBoardDiv && renderBoardDiv.children.length === 0) {
      const table = createBoard(players);
      renderBoardDiv.appendChild(table);
    }
  }, [players]);

  const createBoard = (players) => {
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
          var avatars = matchPlayer(num, players);
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
          var avatars = matchPlayer(num, players);
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

  const matchPlayer = (num, players) => {
    var avatars = [];

    for (let i = 0; i < players.length; i++) {
      if (num == players[i]["placement"]) {
        avatars.push(players[i]["image"]);
      }
    }

    return avatars;
  };

  return <div className="renderBoard"></div>;
};

export default GameBoard;
