import React from 'react';
import '../../styles/MemoryGame.css';
import monosonriente from '../../assets/monosonriente.png';

const GameOver = ({tries, setGameOver, setTries}) => {
    const handleClick = () =>{
        setGameOver(false);
    }

  return (
      <div className='game-over'>
 
          <div className='boxy'>
              <div className='tries'> Game Over after {tries} tries</div>
              <img className={GameOver ? 'quizz_mono_salta' : ''} src={monosonriente} alt='monosonriente'/>
              <button onClick={handleClick} setTries={setTries}> Play Again </button>
          </div>
    </div>
  );
};

export default GameOver;

