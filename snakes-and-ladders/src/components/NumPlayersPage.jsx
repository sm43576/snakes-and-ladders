import "../css/NumPlayersPage.css"
import { NavLink, Link } from "react-router-dom"

function NumPlayersPage() {
  const maxPlayers = 1; // TODO: change this yourself lmao  ~Rachel
  return (
    <div className="player-container">
      

      
      <div className = "players">
          <img className="bubble-p" src="../src/assets/player_bubble.png"></img>
      </div>
      <div className = "computer-players">
        <img className="bubble-c" src="../src/assets/com_bubble.png"></img>
      </div>

      <img className= "bubble-top" src="../src/assets/bubble_top_left.png"></img>
      <img className= "bubble-bot" src="../src/assets/bubble_btm_right.png"></img>


      <button className="pIncrease-btn">{'>'}</button>
      <button className="pDecrease-btn">{'<'}</button>

      <button className="cIncrease-btn">{'>'}</button>
      <button className="cDecrease-btn">{'<'}</button>

      <p className="player-count">2</p>
      <p className="com-count">3</p>

        
        <Link to="/" >
            <button className='home-btn'>
              {'<'}
            </button>
          </Link>

        <NavLink to={"/avatar/0/"+ maxPlayers}>  <button className='avatar-btn'>
             {'>'}
          </button>
        </NavLink>
    </div>
  )

}
export default NumPlayersPage