import { useState, useEffect } from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';

const MemoryGameUZ = () => {
    let arrayofImages = [
        { num: 1, name: 'U', img: require('../../assets/letters/U.png'), isMatch:false},
        { num: 2, name: 'V', img: require('../../assets/letters/V.png'), isMatch:false},
        { num: 3, name: 'W', img: require('../../assets/letters/W.png'), isMatch:false},
        { num: 4, name: 'X', img: require('../../assets/letters/X.png'), isMatch:false},
        { num: 5, name: 'Y', img: require('../../assets/letters/Y.png'), isMatch:false},
        { num: 6, name: 'Z', img: require('../../assets/letters/Z.png'), isMatch:false},
    ]

    let arrayofSigns = [
        { num: 1, name: 'usign', img: require('../../assets/letterssign/usign.png')},
        { num: 2, name: 'vsign', img: require('../../assets/letterssign/vsign.png') },
        { num: 3, name: 'wsign', img: require('../../assets/letterssign/wsign.png') },
        { num: 4, name: 'xsign', img: require('../../assets/letterssign/xsign.png') },
        { num: 5, name: 'ysign', img: require('../../assets/letterssign/ysign.png') },
        { num: 6, name: 'zsign', img: require('../../assets/letterssign/zsign.png')},  
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

export default MemoryGameUZ;