import { useState, useEffect } from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MemoryGameVocales = () => {

    const [t, i18n] = useTranslation("games"); //traduccion

    let arrayofImages = [
        { num: 1, name: 'vocalA', img: require('../../assets/letters/vocalA.png'), isMatch: false },
        { num: 2, name: 'vocalE', img: require('../../assets/letters/vocalE.png'), isMatch: false },
        { num: 3, name: 'vocalI', img: require('../../assets/letters/vocalI.png'), isMatch: false },
        { num: 4, name: 'vocalO', img: require('../../assets/letters/vocalO.png'), isMatch: false },
        { num: 5, name: 'vocalU', img: require('../../assets/letters/vocalU.png'), isMatch: false },
        { num: 6, name: 'monolengua', img: require('../../assets/monolengua.png'), isMatch: false },
    ]

    let arrayofSigns = [
        { num: 1, name: 'asign', img: require('../../assets/letterssign/asign.png') },
        { num: 2, name: 'esign', img: require('../../assets/letterssign/esign.png') },
        { num: 3, name: 'isign', img: require('../../assets/letterssign/isign.png') },
        { num: 4, name: 'osign', img: require('../../assets/letterssign/osign.png') },
        { num: 5, name: 'usign', img: require('../../assets/letterssign/usign.png') },
        { num: 6, name: 'monolengua', img: require('../../assets/monolengua.png') },
    ]

    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [tries, setTries] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const shuffleImages = () => {

        //double array
        let shuffledArray = [...arrayofImages, ...arrayofSigns]
            //add id
            .map((item, index) => ({ ...item, id: index + 1 }))

            .sort((a, b) => 0.5 - Math.random());
        setScore(0)
        setCards(shuffledArray);
    };


    useEffect(() => {
        shuffleImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(selectedCards);
        if (selectedCards.length === 2) {
            setTimeout(() => {
                setSelectedCards([]);
            }, 1000);
            checkMatch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCards]);

    const checkMatch = () => {
        if (selectedCards[0].num === selectedCards[1].num) {
            // console.log("yay!");
            setScore(prev => prev + 1)
            let updatedCards = cards.map((card) => {
                if (card.num === selectedCards[0].num) {
                    return { ...card, isMatch: true };
                }
                return card;
            });
            setCards(updatedCards);
        } else {
            // console.log("dont match!");
            setTries((prev) => prev + 1);
        }
    };
    // console.log(cards);

    //restart game

    useEffect(() => {
        if (score === arrayofImages.length && arrayofSigns.length) {
            console.log("game over");
            setTimeout(() => {
                shuffleImages();
                setGameOver(true);
            }, 1000)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, shuffleImages]);


    return (
        <div className='memory_bg memory_bg_vocales'>
            <Link to={'/Officialpage'}> <button className='memory_exit'>{t("Games.BtnExit")}</button></Link>
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
            <Link to={'/SelecGamVocalesSin'} style={{ visibility: gameOver ? 'visible' : 'hidden' }} ><button className='memory_continue'>{t("Games.BtnNext")}</button></Link>
        </div>
    );
}

export default MemoryGameVocales;