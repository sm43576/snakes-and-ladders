import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NumPlayersPage from "./components/NumPlayersPage";
import AvatarPage from "./components/AvatarPage";
import AvatarLayout from "./components/AvatarLayout";
import GamePage from "./components/GamePage";
import ResultsPage from "./components/ResultsPage";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        {/* <HeaderBar /> s*/}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/players" element={<NumPlayersPage/>}/>
          
          <Route path="/avatar" element={<AvatarLayout/>}>
            <Route path=":currentID/:maxPlayers" element={<AvatarPage/>}/>
          </Route>

          <Route path="/game" element={<GamePage/>}/>
          <Route path="/results" element={<ResultsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App