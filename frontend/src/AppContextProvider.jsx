import React from "react";
import useGet from "./hooks/useGet";
import axios from "axios";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

const AppContext = React.createContext({
  articles: [],
});

function AppContextProvider({ children }) {
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
      `${API_BASE_URL}/player`,
      playerToUpload
    );
    refreshPlayers();
    return playerResponse.data;
  }

  const [currentID, setCurrentID] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(1);
  const [maxCommies, changeCom] = useState(0);

  // The context value that will be supplied to any descendants of this component.
  const context = {
    players,
    playersLoading,
    addPlayer,
    currentID,
    setCurrentID,
    maxPlayers,
    setMaxPlayers,
    maxCommies,
    changeCom,
  };

  // Wraps the given child components in a Provider for the above context.
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
