import React, { useContext } from "react";
import { useState } from "react";
import useGet from "./hooks/useGet";
import axios from "axios";

export const AppContext = React.createContext({
  players: [],
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export function AppContextProvider({ children }) {
  const [currentID, setCurrentID] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const [maxCommies, changeCom] = useState(0);

  const defaultPlayers = [
    { name: "Player 1", id: 0, avatarFile: "" },
    { name: "Player 2", id: 1, avatarFile: "" },
    { name: "Player 3", id: 2, avatarFile: "" },
    { name: "Player 4", id: 3, avatarFile: "" },
    { name: "Player 5", id: 4, avatarFile: "" },
    { name: "Player 6", id: 5, avatarFile: "" },
  ];

  const [players, setPlayers] = useState(defaultPlayers);

  const context = {
    currentID,
    setCurrentID,
    maxPlayers,
    setMaxPlayers,
    maxCommies,
    changeCom,
    players,
    setPlayers,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
