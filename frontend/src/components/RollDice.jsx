import '../css/RollDice.css'
import Die from './Die'
import { useContext, useState } from 'react'
import { AppContext } from '../AppContextProvider'

function RollDice() {

  const {
    currentID,
    setCurrentID,
    nextID,
    setNextID,
  } = useContext(AppContext);

  // Face numbers passes as default props
  const sides = ['one', 'two', 'three',
    'four', 'five', 'six']

  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('two');
  const [rolling, setRolling] = useState(false);

  function roll() {
    setDie1(sides[(Math.floor(Math.random() * sides.length))]);
    setDie2(sides[(Math.floor(Math.random() * sides.length))]);
    setRolling(true);
    
    // Start timer of one sec when rolling start
    // Set rolling to false again when time over
    setTimeout(() => {
      setRolling(false);
    }, 1000)
    setCurrentID(currentID + 1);
    setNextID(nextID + 1);
  }

  const handleBtn = rolling ?
    'RollDice-rolling' : ''

  return (
    <div className='RollDice'>
      <button className={handleBtn}
        // disabled={this.state.rolling}
        onClick={() => roll()}>
        {rolling ? 'Rolling' : 'Click to Roll!'}
      </button>

      <div className='RollDice-container'>
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>

    </div>
  )
}

export default RollDice
