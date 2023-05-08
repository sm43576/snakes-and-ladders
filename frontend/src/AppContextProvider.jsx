import React, { useContext } from "react";
import { useState } from "react";
import useGet from "./hooks/useGet";
import axios from "axios";

export const AppContext = React.createContext({
  players: [],
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export function AppContextProvider({ children }) {
  // Because we need this data pretty much everywhere in our app, it's a good idea
  // to load it in here, rather than having to make new GET requests every time we change the page.
  //   const { data: players } = useGet(`${API_BASE_URL}/api/players`, []);

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

  // const [players, setPlayers] = useState(defaultPlayers);

  // Sets up the app to fetch the players from a REST API.
  const {
    data: players,
    isLoading: playersLoading,
    refresh: refreshPlayers,
  } = useGet(`${API_BASE_URL}/player`, []);

  async function addPlayer(name, placement, image) {
    const playerToUpload = {
      name,
      placement,
      image,
    };

    const playerResponse = await axios.post(
      `${API_BASE_URL}/players`,
      playerToUpload,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    refreshPlayers();
    return playerResponse.data;
  }

  const context = {
    currentID,
    setCurrentID,
    maxPlayers,
    setMaxPlayers,
    maxCommies,
    changeCom,
    players,
    // setPlayers,
    addPlayer,
    playersLoading,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
