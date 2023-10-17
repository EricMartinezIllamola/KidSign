import { useState, useEffect } from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';

const MemoryGameKO = () => {
    let arrayofImages = [
        { num: 1, name: 'K', img: require('../../assets/letters/K.png'), isMatch:false},
        { num: 2, name: 'L', img: require('../../assets/letters/L.png'), isMatch:false},
        { num: 3, name: 'M', img: require('../../assets/letters/M.png'), isMatch:false},
        { num: 4, name: 'N', img: require('../../assets/letters/N.png'), isMatch:false},
        { num: 5, name: 'O', img: require('../../assets/letters/O.png'), isMatch:false},
        { num: 6, name: 'Monorama', img: require('../../assets/Monorama.png'), isMatch:false},
    ]

    let arrayofSigns = [
        { num: 1, name: 'ksign', img: require('../../assets/letterssign/ksign.png')},
        { num: 2, name: 'lsign', img: require('../../assets/letterssign/lsign.png') },
        { num: 3, name: 'msign', img: require('../../assets/letterssign/msign.png') },
        { num: 4, name: 'nsign', img: require('../../assets/letterssign/nsign.png') },
        { num: 5, name: 'osign', img: require('../../assets/letterssign/osign.png') },
        { num: 6, name: 'Monorama', img: require('../../assets/Monorama.png')},  
    ]

    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [tries,setTries] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const shuffleImages = () => {

        //double array
        let shuffledArray = [...arrayofImages, ...arrayofSigns]
            //add id
            .map((item, index) => ({...item, id: index + 1 }))

            .sort((a, b) => 0.5 - Math.random());
        setScore(0)
        setCards(shuffledArray);
    };


    useEffect(() => {
        shuffleImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
        console.log(selectedCards);
        if(selectedCards.length ===2) {
            setTimeout(() => {
                setSelectedCards([]);
            }, 1000);
            checkMatch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCards]);

    const checkMatch = () =>{
        if(selectedCards[0].num === selectedCards[1].num){
            // console.log("yay!");
            setScore(prev=>prev +1)
            let updatedCards = cards.map((card)=>{
                if(card.num === selectedCards[0].num){
                    return{...card, isMatch: true}; 
                }
                return card;
            });
            setCards(updatedCards);
        }else{
            // console.log("dont match!");
            setTries((prev) => prev + 1);
        }
    };
    // console.log(cards);

    //restart game

    useEffect(() =>{
        if(score === arrayofImages.length && arrayofSigns.length) {
            console.log("game over");
            setTimeout(() =>{
                shuffleImages();
                setGameOver(true);
            }, 1000)
   
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, shuffleImages]);


    return (
        <>

            <div className='containeR'>
                <div className='score-container'>
                    <div className='score'><strong>Score:{score}</strong> </div>
                    <div className='tries'> <strong>Tries {tries}</strong></div>
                </div>
                <div className='cards-container1'>
                    {cards.map((arrayofImages) => (
                        <Card
                            key={arrayofImages.id}
                            card={arrayofImages}
                            setSelectedCards={setSelectedCards}
                            selectedCards={selectedCards} />
                    ))}
                </div>
                {gameOver && <GameOver setTries={setTries} tries={tries} setGameOver={setGameOver} />}
            </div>

        </>
    );
}

export default MemoryGameKO;