import '../css/AvatarPage.css'
import { Link } from "react-router-dom"
import { useState } from "react";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";


const avatarImageFiles = ["avatar_pufferfish.png", "avatar_dolphin.png", "avatar_otter.png", "avatar_squid.png",
                          "avatar_seal.png", "avatar_octopus.png", "avatar_shark.png", "avatar_tropic_fish.png"];

function AvatarPage() {
  const currentPlayer= { // TODO Temporary
    name: 'Player 1', 
    id: 1,
    avatarFile: '',
  }
  const[players, setPlayer] = useState([currentPlayer]);
  const [gameBtnState, setGameBtnState] = useState(false);
  // setPlayer(currentPlayer); // TODO set current player based on max number of players?

  
  // When player selects an avatar to use prob need to save it in a database or something
  function handleAvatarBtnClick( avatarFileName) {
    const index = players.findIndex(function(c){
      return c.id== currentPlayer.id
    });
    const tempPlayersArray = [...players];
    tempPlayersArray[index]={
      ...currentPlayer,
      avatarFile: avatarFileName
    }
    setPlayer(tempPlayersArray);
    console.log(players);
    // TODO LINK TO BACKEND DATABASE OR PASS IT THROUGH TO NEXT PAGE
    canPlayersStartGame(true); // Checks if last player has chosen avatar in order to play game
  }

  // Enables "Start game" button if last player has chosen an avatar
  function canPlayersStartGame (hasChosen){
    if(hasChosen && currentPlayer.id == 1){ // TODO 4 is temporary intend to use maxPlayer context from numPlayers page
      setGameBtnState(true);
    }else{
      setGameBtnState(false);
    }
  }

  return (
    <div className='avatar-container'>
        {/* ------ Back Button -----*/}
        <img className='bubble-corner-top' src={bubbleCornerTop} />
        <Link to="/players"><button className='back-btn'>{'<'}</button></Link>

        {/* ------ Headings -----*/}
        <h1 className='heading-title'>SELECT AVATAR</h1>
        <h2 className='heading-subtitle'>PLAYER 1</h2>
        <input className='nickname-input' type='text' placeholder='Enter a nickname...' />

      {/* ------ Avatar Selection -----*/}
      <div className='avatar-content'>
        {avatarImageFiles.map(file=>(
          <div className='avatar-circles'>
            <button className='avatar-img-btn' key={"button"+file} onClick={()=>handleAvatarBtnClick(file)}>
              <img className='avatar-images' key={file} src={`../src/assets/selectable_avatars/${file}`}/>
            </button>
          </div>
        ))}
      </div>
      
      {/* ------ Next button & star game button -----*/}
      <img className='bubble-corner-btm' src={bubbleCornerBtm} />
      <Link to="/avatar"> {/*TODO redirect with ID numbers i.e. "/avatar/1", "/avatar/2" etc */}
        <button className='next-btn' disabled={currentPlayer.id == 1}>{'>'}</button> {/*NOTE 1 is temporary, intend to use maxPlayers from previous page. Only disables when the last player is selecting*/}
      </Link>
      <Link to="/game">
        <button className='start-game-btn' disabled={!gameBtnState}>{'PLAY GAME'}</button>
      </Link>
    </div>
  )
}

export default AvatarPage