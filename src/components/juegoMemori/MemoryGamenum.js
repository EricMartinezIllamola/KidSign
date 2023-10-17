import { useState, useEffect } from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';

const MemoryGamenum = () => {
    let arrayofImages = [
        { num: 1, name: 'zero', img: require('../../assets/numbers/zero.png'), isMatch:false},
        { num: 2, name: 'one', img: require('../../assets/numbers/one.png'), isMatch:false},
        { num: 3, name: 'two', img: require('../../assets/numbers/two.png'), isMatch:false},
        { num: 4, name: 'three', img: require('../../assets/numbers/three.png'), isMatch:false},
        { num: 5, name: 'four', img: require('../../assets/numbers/four.png'), isMatch:false},
        { num: 6, name: 'monohojas', img: require('../../assets/mascots/monohojas.png'), isMatch:false},
    ]

    let arrayofSigns = [
        { num: 1, name: 'zerosign', img: require('../../assets/numbers/zerosign.png')},
        { num: 2, name: 'onesign', img: require('../../assets/numbers/onesign.png') },
        { num: 3, name: 'twosign', img: require('../../assets/numbers/twosign.png') },
        { num: 4, name: 'threesign', img: require('../../assets/numbers/threesign.png') },
        { num: 5, name: 'foursign', img: require('../../assets/numbers/foursign.png') },
        { num: 6, name: 'monohojas', img: require('../../assets/mascots/monohojas.png')},  
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

export default MemoryGamenum;