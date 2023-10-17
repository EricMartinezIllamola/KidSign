import React, {useState, useEffect} from 'react';
import '../../styles/MemoryGame.css';
import Card from '../PropMemori/Card';
import GameOver from '../PropMemori/GameOver';

//Solo llama a 6 pero no funciona a partir de eso, 
const MemoryGamegloballetras = () => {
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let arrayofImages2 = [];
    let arrayofSigns2 = [];

    let arrayofImages = [
        { num: 1, name: 'A', img: require('../../assets/letters/A.png'), isMatch:false},
        { num: 2, name: 'B', img: require('../../assets/letters/B.png'), isMatch:false},
        { num: 3, name: 'C', img: require('../../assets/letters/C.png'), isMatch:false},
        { num: 4, name: 'D', img: require('../../assets/letters/D.png'), isMatch:false},
        { num: 5, name: 'E', img: require('../../assets/letters/E.png'), isMatch:false},
        { num: 6, name: 'F', img: require('../../assets/letters/F.png'), isMatch:false},
        { num: 7, name: 'G', img: require('../../assets/letters/G.png'), isMatch:false},
        { num: 8, name: 'H', img: require('../../assets/letters/H.png'), isMatch:false},
        { num: 9, name: 'I', img: require('../../assets/letters/I.png'), isMatch:false},
        { num: 10, name: 'J', img: require('../../assets/letters/J.png'), isMatch:false},
        { num: 11, name: 'K', img: require('../../assets/letters/K.png'), isMatch:false},
        { num: 12, name: 'L', img: require('../../assets/letters/L.png'), isMatch:false},
        { num: 13, name: 'M', img: require('../../assets/letters/M.png'), isMatch:false},
        { num: 14, name: 'N', img: require('../../assets/letters/N.png'), isMatch:false},
        { num: 15, name: 'O', img: require('../../assets/letters/O.png'), isMatch:false},
        { num: 16, name: 'P', img: require('../../assets/letters/P.png'), isMatch:false},
        { num: 17, name: 'Q', img: require('../../assets/letters/Q.png'), isMatch:false},
        { num: 18, name: 'R', img: require('../../assets/letters/R.png'), isMatch:false},
        { num: 19, name: 'S', img: require('../../assets/letters/S.png'), isMatch:false},
        { num: 20, name: 'T', img: require('../../assets/letters/T.png'), isMatch:false},
        { num: 21, name: 'U', img: require('../../assets/letters/U.png'), isMatch:false},
        { num: 22, name: 'V', img: require('../../assets/letters/V.png'), isMatch:false},
        { num: 23, name: 'W', img: require('../../assets/letters/W.png'), isMatch:false},
        { num: 24, name: 'X', img: require('../../assets/letters/X.png'), isMatch:false},
        { num: 25, name: 'Y', img: require('../../assets/letters/Y.png'), isMatch:false},
        { num: 26, name: 'Z', img: require('../../assets/letters/Z.png'), isMatch:false},

    ]

    let arrayofSigns = [
        { num: 1, name: 'asign', img: require('../../assets/letterssign/asign.png')},
        { num: 2, name: 'bsign', img: require('../../assets/letterssign/bsign.png') },
        { num: 3, name: 'csign', img: require('../../assets/letterssign/csign.png') },
        { num: 4, name: 'dsign', img: require('../../assets/letterssign/dsign.png') },
        { num: 5, name: 'esign', img: require('../../assets/letterssign/esign.png') },
        { num: 6, name: 'fsign', img: require('../../assets/letterssign/fsign.png')},  
        { num: 7, name: 'gsign', img: require('../../assets/letterssign/gsign.png') },
        { num: 8, name: 'hsign', img: require('../../assets/letterssign/hsign.png') },
        { num: 9, name: 'isign', img: require('../../assets/letterssign/isign.png') },
        { num: 10, name: 'jsign', img: require('../../assets/letterssign/jsign.png') },
        { num: 11, name: 'ksign', img: require('../../assets/letterssign/ksign.png')},
        { num: 12, name: 'lsign', img: require('../../assets/letterssign/lsign.png') },
        { num: 13, name: 'msign', img: require('../../assets/letterssign/msign.png') },
        { num: 14, name: 'nsign', img: require('../../assets/letterssign/nsign.png') },
        { num: 15, name: 'osign', img: require('../../assets/letterssign/osign.png') },
        { num: 16, name: 'psign', img: require('../../assets/letterssign/psign.png')},
        { num: 17, name: 'qsign', img: require('../../assets/letterssign/qsign.png') },
        { num: 18, name: 'rsign', img: require('../../assets/letterssign/rsign.png') },
        { num: 19, name: 'ssign', img: require('../../assets/letterssign/ssign.png') },
        { num: 20, name: 'tsign', img: require('../../assets/letterssign/tsign.png') },
        { num: 21, name: 'usign', img: require('../../assets/letterssign/usign.png')},
        { num: 22, name: 'vsign', img: require('../../assets/letterssign/vsign.png') },
        { num: 23, name: 'wsign', img: require('../../assets/letterssign/wsign.png') },
        { num: 24, name: 'xsign', img: require('../../assets/letterssign/xsign.png') },
        { num: 25, name: 'ysign', img: require('../../assets/letterssign/ysign.png') },
        { num: 26, name: 'zsign', img: require('../../assets/letterssign/zsign.png')},  

    ]

    for (let index = 1; index < 7; index++) {
   
        let num = Math.floor(Math.random() * 25) + 0;
        console.log(arrayofImages[num]);
        // numArray = numArray.filter(x => x !== num);
        arrayofImages2.push(arrayofImages[num]);
        arrayofSigns2.push(arrayofSigns[num]);
    }
    console.log(arrayofImages2);

    
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [tries,setTries] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const shuffleImages = () => {

        //double array
        let shuffledArray = [];
        for (let index = 0; index < 7; index++) {
            shuffledArray = [...arrayofImages2[index], ...arrayofSigns2[index]];
        }
        shuffledArray = shuffledArray.map((item, index) => ({...item, id: index + 1 })).sort((a, b) => 0.5 - Math.random());


            //add id

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
        if(score === arrayofImages2.length && arrayofSigns2.length) {
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
                <div className='cards-containergloballetras'>
                    {cards.map((arrayofImages2) => (
                        <Card
                            key={arrayofImages2.id}
                            card={arrayofImages2}
                            setSelectedCards={setSelectedCards}
                            selectedCards={selectedCards} />
                    ))}
                </div>
                {gameOver && <GameOver setTries={setTries} tries={tries} setGameOver={setGameOver} />}
            </div>

        </>
    );
}

export default MemoryGamegloballetras;
