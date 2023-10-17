import React from 'react';
import '../../styles/MemoryGame.css';
import monosonriente from '../../assets/monosonriente.png';
// import Confetti from '.react-confetti';
// import useWindowSize from 'react-use/lib/useWindowSize';

const GameOver = ({tries, setGameOver, setTries}) => {
    const handleClick = () =>{
        setGameOver(false);
    }
    // const { width, height } = useWindowSize()
  return (
      <div className='game-over'>
        {/* <Confetti   
        width={width}
        height={height}
        /> */}
          <div className='boxy'>
              <div className='tries'> Game Over after {tries} tries</div>
              <img className={GameOver ? 'quizz_mono_salta' : ''} src={monosonriente} alt='monosonriente'/>
              <button onClick={handleClick} setTries={setTries}> Play Again </button>
          </div>
    </div>
  );
};

export default GameOver;

