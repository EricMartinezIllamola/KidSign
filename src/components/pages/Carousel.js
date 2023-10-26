import React, { useState, useEffect } from 'react';
import '../../styles/Carousel.css';


import SeccionLetras from '../../assets/capturas/SeccionLetras.jpg';
import Juegomano from '../../assets/capturas/Juegomano.jpg';
import Juegomemory from '../../assets/capturas/Juegomemory.jpg';
import Jugadores from '../../assets/capturas/Jugadores.jpg';
import Jugadoresdos from '../../assets/capturas/Jugadoresdos.jpg';


const App = () => {
    const [position, setPosition] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => setTimer(timer + 1), 8000);

        if (position > -4500) {
            setPosition(position - 750);
        }
        else {
            setPosition(0);
        }
    }, [timer])

    const carrousel_btn = (data) => {
        setPosition(data);
    }

    return (
        <div className='carousel_container'>
            <div className='carousel_body'>
                <img src={SeccionLetras} alt='' className='carousel_img' style={{ transform: "translateX(" + position + "px)" }} />
                <img src={Juegomano} alt='' className='carousel_img' style={{ transform: "translateX(" + position + "px)" }} />
                <img src={Juegomemory} alt='' className='carousel_img' style={{ transform: "translateX(" + position + "px)" }} />
                <img src={Jugadores} alt='' className='carousel_img' style={{ transform: "translateX(" + position + "px)" }} />
                <img src={Jugadoresdos} alt='' className='carousel_img' style={{ transform: "translateX(" + position + "px)" }} />
                <div className="carousel_btn_container">
                    <div onClick={() => { carrousel_btn(0) }} className={position === 0? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                    <div onClick={() => { carrousel_btn(-750) }} className={position === -750? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                    <div onClick={() => { carrousel_btn(-1500) }} className={position === -1500? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                    <div onClick={() => { carrousel_btn(-2250) }} className={position === -2250? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                    <div onClick={() => { carrousel_btn(-3000) }} className={position === -3000? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                    <div onClick={() => { carrousel_btn(-3750) }} className={position === -3750? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                    <div onClick={() => { carrousel_btn(-4500) }} className={position === -4500? "carousel_btn carousel_btn_active" : "carousel_btn"}></div>
                </div>
                {/* <div onClick={() => { prev() }} className="carousel_btn carousel_btn_prev"></div>
                <div onClick={() => { next() }} className="carousel_btn carousel_btn_next"></div> */}
            </div>
        </div>
    );
}

export default App;