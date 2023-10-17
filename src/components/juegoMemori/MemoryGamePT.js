import { useState, useEffect } from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';

const MemoryGamePT = () => {
    let arrayofImages = [
        { num: 1, name: 'P', img: require('../../assets/letters/P.png'), isMatch:false},
        { num: 2, name: 'Q', img: require('../../assets/letters/Q.png'), isMatch:false},
        { num: 3, name: 'R', img: require('../../assets/letters/R.png'), isMatch:false},
        { num: 4, name: 'S', img: require('../../assets/letters/S.png'), isMatch:false},
        { num: 5, name: 'T', img: require('../../assets/letters/T.png'), isMatch:false},
        { num: 6, name: 'Monorama', img: require('../../assets/Monorama.png'), isMatch:false},
    ]

    let arrayofSigns = [
        { num: 1, name: 'psign', img: require('../../assets/letterssign/psign.png')},
        { num: 2, name: 'qsign', img: require('../../assets/letterssign/qsign.png') },
        { num: 3, name: 'rsign', img: require('../../assets/letterssign/rsign.png') },
        { num: 4, name: 'ssign', img: require('../../assets/letterssign/ssign.png') },
        { num: 5, name: 'tsign', img: require('../../assets/letterssign/tsign.png') },
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

export default MemoryGamePT;