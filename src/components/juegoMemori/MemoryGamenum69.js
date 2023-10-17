import { useState, useEffect } from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';

const MemoryGamenum69 = () => {
    let arrayofImages = [
        { num: 1, name: 'five', img: require('../../assets/numbers/five.png'), isMatch:false},
        { num: 2, name: 'six', img: require('../../assets/numbers/six.png'), isMatch:false},
        { num: 3, name: 'seven', img: require('../../assets/numbers/seven.png'), isMatch:false},
        { num: 4, name: 'eight', img: require('../../assets/numbers/eight.png'), isMatch:false},
        { num: 5, name: 'nine', img: require('../../assets/numbers/nine.png'), isMatch:false},
        { num: 6, name: 'monosonriente', img: require('../../assets/monosonriente.png'), isMatch:false},
    ]

    let arrayofSigns = [
        { num: 1, name: 'fivesign', img: require('../../assets/numbers/fivesign.png')},
        { num: 2, name: 'sixsign', img: require('../../assets/numbers/sixsign.png') },
        { num: 3, name: 'sevensign', img: require('../../assets/numbers/sevensign.png') },
        { num: 4, name: 'eightsign', img: require('../../assets/numbers/eightsign.png') },
        { num: 5, name: 'ninesign', img: require('../../assets/numbers/ninesign.png') },
        { num: 6, name: 'monosonriente', img: require('../../assets/monosonriente.png')},  
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

export default MemoryGamenum69;