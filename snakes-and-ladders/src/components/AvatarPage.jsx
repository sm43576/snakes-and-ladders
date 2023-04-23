import '../css/AvatarPage.css'
import { Link } from "react-router-dom"
import bubblecornerTop from "../assets/bubble_top_left.png";

const avatarImageFiles = ["avatar_pufferfish.png", "avatar_dolphin.png", "avatar_otter.png", "avatar_squid.png",
                          "avatar_seal.png", "avatar_octopus.png", "avatar_shark.png", "avatar_tropic_fish.png"];

function AvatarPage() {
  return (
    <body>
      <div className='avatar-container'>

        <div className='avatar-heading'>
          <div className='container-top-corner'>
              <img className='bubble-corner-top' src={bubblecornerTop} />
              <Link to="/players"><button className='back-btn'>{"<"}</button></Link>
          </div>
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
          <Link to="/avatar">
              <button>
                SELECT NEXT AVATAR
              </button>
            </Link>

            <Link to="/game">
              <button>
                PLAY GAME
              </button>
            </Link>
        </div>
      </div>
    </body>
  )
}

export default AvatarPage