import '../css/AvatarPage.css'
import { Link } from "react-router-dom"
import bubblecornerTop from "../assets/bubble_top_left.png";

function AvatarPage() {
  return (
    <body>
      <div className='avatar-container'>
        <div className='avatar-heading'>
          <div className='container-top-corner'>
              <img className='bubble-corner-top' src={bubblecornerTop} />
              <button className='back-btn'>{"<"}</button>
          </div>
          <h1 className='heading-title'>
            SELECT AVATAR
          </h1>
          <h2 className='heading-subtitle'>
            PLAYER 1
          </h2>
          <input className='nickname-input' type='text' placeholder='Enter a nickname...' />
        </div>

        <div className='avatar-content'>
          <p>insert avatars here</p>
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