import '../css/AvatarPage.css'
import { Link, useParams,NavLink } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";

const avatarImageFiles = ["avatar_pufferfish.png", "avatar_dolphin.png", "avatar_otter.png", "avatar_squid.png",
                          "avatar_seal.png", "avatar_octopus.png", "avatar_shark.png", "avatar_tropic_fish.png"];

function AvatarPage() {
  let { currentID, maxPlayers } = useParams();
  currentID = parseInt(currentID);
  console.log(currentID)
  console.log(maxPlayers)
  const nextID = currentID+1;
  const previousID = currentID -1;
  const playersList= [{ // TODO: Temporary. need to generate list of players based on max number of players?
    name: 'Player 1', 
    id: 0,
    avatarFile: '',},
    {
      name: 'Player 2', 
      id: 1,
      avatarFile: '',}
  ];

  const[players, setPlayer] = useState(playersList); 

  const [gameBtnState, setGameBtnState] = useState(false); // To control enablement/disablement of start game button
  const[activeAvatar, setActiveAvatar] = useState(""); // To control visual indicator for avatar selection
  const refNameInput = useRef(null);

  function handleNameChange(newName){
    console.log(newName)
    const tempPlayersArray = [...players];
      tempPlayersArray[currentID]={
        ...players[currentID],
        name: newName.length > 0 ? newName : "Player " + currentID+1 
      }
      setPlayer(tempPlayersArray); // only updates next render tho so maybe database instead?
      // TODO: LINK TO BACKEND DATABASE OR PASS IT THROUGH TO NEXT PAGE
      console.log(players) //FIXME: remove this
  }
  
  // When player selects an avatar to use prob need to save it in a database or something
  function handleAvatarBtnClick( avatarFileName) {
    setActiveAvatar(avatarFileName);
    const tempPlayersArray = [...players];
    tempPlayersArray[currentID]={
      ...players[currentID],
      avatarFile: avatarFileName
    }
    setPlayer(tempPlayersArray); // only updates next render tho so maybe database instead?
    console.log(players) //FIXME: remove this
    // TODO: LINK TO BACKEND DATABASE OR PASS IT THROUGH TO NEXT PAGE
    canPlayersStartGame(true); // Checks if last player has chosen avatar in order to play game
  }

  // Enables "Start game" button if last player has chosen an avatar
  function canPlayersStartGame (hasChosen){
    if(hasChosen && currentID+1 == maxPlayers){ 
      setGameBtnState(true);
    }else{
      setGameBtnState(false);
    }
  }

  function clearAvatarSelectionAndNameInput(){
    refNameInput.current.value = '';
    if(activeAvatar.length>0){
      setActiveAvatar("")
    }
  }

  return (
    <div className='avatar-container'>
        {/* ------ Back Button -----*/}
        <img className='bubble-corner-top' src={bubbleCornerTop} />
        <Link to={currentID == 0 ? "/players" : "/avatar/"+previousID.toString()+"/"+ maxPlayers.toString()}>
          <button className='back-btn' onClick={()=>clearAvatarSelectionAndNameInput()}>{'<'}</button> {/**reset current avatar selection visual indicator when going back  */}
          </Link>

        {/* ------ Headings -----*/}
        <h1 className='heading-title'>SELECT AVATAR</h1>
        <h2 className='heading-subtitle'>{players[currentID].name.toUpperCase()}</h2>
        <input className='nickname-input' type='text' ref={refNameInput} placeholder='Enter a nickname...' onChange={(e)=> handleNameChange(e.target.value)}/>

      {/* ------ Avatar Selection -----*/}
      <div className='avatar-content'>
        {avatarImageFiles.map(file=>(
          <div className='avatar-circles'>
            <button className= {activeAvatar == file ? 'selected-avatar-img-btn':'default-avatar-img-btn'} key={"button"+file} onClick={()=>handleAvatarBtnClick(file)}>
              <img className='avatar-images' key={file} src={`/src/assets/selectable_avatars/${file}`}/>
            </button>
          </div>
        ))}
      </div>
      
      {/* ------ Next button & star game button -----*/}
      <img className='bubble-corner-btm' src={bubbleCornerBtm} />
      <NavLink to={"/avatar/"+nextID.toString()+"/"+ maxPlayers.toString()}>
        <button className='next-btn' disabled={currentID+1 >= maxPlayers} onClick={()=>clearAvatarSelectionAndNameInput()}>{'>'}</button> {/**reset current avatar selection visual indicator when going forward  */}
      </NavLink>
      <Link to="/game">
        <button className='start-game-btn' disabled={!gameBtnState}>{'PLAY GAME'}</button>
      </Link>
    </div>
  )
}

export default AvatarPage