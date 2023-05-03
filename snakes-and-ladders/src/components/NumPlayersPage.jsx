import "../css/NumPlayersPage.css"
import { NavLink, Link } from "react-router-dom"
import { useState } from 'react';

function NumPlayersPage() {

  const [maxPlayers,changePlayer] = useState(0);
  const [maxCommies,changeCom] = useState(0);

  function handlePlayerCount(string){
    if (string == '>')
      changePlayer(maxPlayers+1);

    else if((string =='<') &&(maxPlayers!=0))
      changePlayer(maxPlayers-1);
    console.log(maxPlayers);
  }

  function handleComCount(string){
    if (string == '>')
      changeCom(maxCommies+1);

    else if((string =='<') &&(maxCommies!=0))
      changeCom(maxCommies-1);
    console.log(maxCommies);
  }


  
  return (
    <div className="player-container">
      
      <img className= "bubble-top" src="../src/assets/bubble_top_left.png"></img>
      <img className= "bubble-bot" src="../src/assets/bubble_btm_right.png"></img>


      <button className="pIncrease-btn" onClick={()=>handlePlayerCount('>')}>{'>'}</button>
      <button className="pDecrease-btn" onClick={()=>handlePlayerCount('<')}>{'<'}</button>

      <button className="cIncrease-btn" onClick={()=>handleComCount('>')}>{'>'}</button>
      <button className="cDecrease-btn" onClick={()=>handleComCount('<')}>{'<'}</button>

      <p className="player-count">{maxPlayers}</p>
      <p className="com-count">{maxCommies}</p>

        
        <Link to="/" >
            <button className='home-btn'>
              {'<'}
            </button>
          </Link>

        <NavLink to={"/avatar/0/"+ maxPlayers}>  <button className='avatar-btn'>
             {'>'}
          </button>
        </NavLink>

              
      <div className = "players">
          <img className="bubble-p" src="../src/assets/player_bubble.png"></img>
      </div>
      <div className = "computer-players">
        <img className="bubble-c" src="../src/assets/com_bubble.png"></img>
      </div>
    </div>
  )

}
export default NumPlayersPage