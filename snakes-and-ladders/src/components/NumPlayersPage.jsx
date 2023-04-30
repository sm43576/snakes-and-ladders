import "../css/NumPlayersPage.css"
import { NavLink, Link } from "react-router-dom"

function NumPlayersPage() {
  const maxPlayers = 1; // TODO: change this yourself lmao  ~Rachel
  return (
    <div className="player-container">
      
      {/* <img className="background" src ="../src/assets/player-background.png"></img> */}
      <img className= "bubble-top" src="../src/assets/bubble_top_left.png"></img>
      <img className= "bubble-bot" src="../src/assets/bubble_btm_right.png"></img>

      <div>
        <div className = "players">
            <img className="bubble-p" src="../src/assets/player-bubble.png"></img>
        </div>
        <div className = "computer-players">
          <img className="bubble-c" src="../src/assets/player-bubble.png"></img>
        </div>

        <NavLink to={"/avatar/0/"+ maxPlayers}> {/* TODO: replace 2 with max number of players. LEAVE 0 ALONE since that indicates first player ~Rachel */}
          <button className='avatar-btn'>
             {'>'}
          </button>
        </NavLink>

        <Link to="/" >
          <button className='home-btn'>
             {'<'}
          </button>
        </Link>

        <p className="players-text">  PLAYERS</p>
        <button className="pIncrease-btn">{'>'}</button>
        <button className="pDecrease-btn">{'<'}</button>

        <p className="com-text">COM PLAYERS</p>
        <button className="cIncrease-btn">{'>'}</button>
        <button className="cDecrease-btn">{'<'}</button>

        <p className="player-count">2</p>
        <p className="com-count">3</p>


      </div>
    </div>
  )
}

export default NumPlayersPage