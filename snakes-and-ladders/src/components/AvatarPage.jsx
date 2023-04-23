import '../css/AvatarPage.css'
import { Link } from "react-router-dom"
import bubbleCornerTop from "../assets/bubble_top_left.png";
import bubbleCornerBtm from "../assets/bubble_btm_right.png";

const avatarImageFiles = ["avatar_pufferfish.png", "avatar_dolphin.png", "avatar_otter.png", "avatar_squid.png",
                          "avatar_seal.png", "avatar_octopus.png", "avatar_shark.png", "avatar_tropic_fish.png"];

function AvatarPage() {
  return (
      <div className='avatar-container'>
        <div className='container-top-corner'>
            <img className='bubble-corner-top' src={bubbleCornerTop} />
            <Link to="/players"><button className='back-btn'>{"Back"}</button></Link>
        </div>
        <div className='avatar-heading'>
          <h1 className='heading-title'>SELECT AVATAR</h1>
          <h2 className='heading-subtitle'>PLAYER 1</h2>
          <input className='nickname-input' type='text' placeholder='Enter a nickname...' />
        </div>

        <div className='avatar-content'>
          {avatarImageFiles.map(file=>(
            <div className='avatar-circles'>
              {/* TODO ADD BUTTONS */}
              <img className='avatar-images' key={file} src={`../src/assets/selectable_avatars/${file}`}/>
            </div>
          ))}
        </div>

        <div className='avatar-footer'>
          <div className='container-btm-corner'>
                <img className='bubble-corner-btm' src={bubbleCornerBtm} />
                <Link to="/avatar"><button className='next-player-btn'>Next</button></Link>
            </div>

          {/* <Link to="/avatar">
              <button>
                SELECT NEXT AVATAR
              </button>
            </Link>

            <Link to="/game">
              <button>
                PLAY GAME
              </button>
            </Link> */}
        </div>
      </div>
  )
}

export default AvatarPage