import React, {useEffect, useState} from 'react';
import '../../styles/MemoryGame.css';


const Card = ({card, setSelectedCards, selectedCards}) => {
    // console.log(card);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () =>{
        // console.log('Clicked!')
        setSelectedCards([...selectedCards, card]);
    };

    useEffect(()=> {
        if(
            selectedCards[0] === card || 
            selectedCards[1] === card || 
            card.isMatch
        ){
            setIsFlipped(true);
        } else {
            setIsFlipped(false);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCards]);

    return(
        <div className={isFlipped ? "cards open" : "cards"} onClick={handleClick}>
            <div className='frontside'> 
            <img src={card.img} alt='' />
            
            </div>
            <div className='backside'> </div>
        </div>

    )
}

export default Card;
