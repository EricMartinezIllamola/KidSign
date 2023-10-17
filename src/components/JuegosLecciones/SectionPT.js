import React, { useState, useEffect} from 'react';
import P from '../../assets/letters/P.png';
import psign from '../../assets/letterssign/psign.png';
import Q from '../../assets/letters/Q.png';
import qsign from '../../assets/letterssign/qsign.png';
import R from '../../assets/letters/R.png';
import rsign from '../../assets/letterssign/rsign.png';
import S from '../../assets/letters/S.png';
import ssign from '../../assets/letterssign/ssign.png';
import T from '../../assets/letters/T.png';
import tsign from '../../assets/letterssign/tsign.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import arrowD from '../../assets/arrowD.png';
import "../../styles/App.css";

const SectionPT = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [utterance, setUtterance] = useState(null);
    const [utterance2, setUtterance2] = useState(null);
//audio y poner funcion en cada boton
    const handlePlay_es = () => {
        const synth = window.speechSynthesis;
        synth.speak(utterance);
    };

    const handlePlay_en = () => {
        const synth = window.speechSynthesis;
        synth.speak(utterance2);
    };
//

    const switchVisible = () => {
        // Calculate the index of the next div to show
        const nextIndex = (visibleIndex + 1) % 5;
        setVisibleIndex(nextIndex)
    };

    // audio usestate
    useEffect(() => {
        const synth = window.speechSynthesis;
        const es = new SpeechSynthesisUtterance(convertirvocales[visibleIndex]['name']);
        es.lang = "es-ES";
        setUtterance(es);
        const en = new SpeechSynthesisUtterance(convertirvocales[visibleIndex]['name']);
        en.lang = "en-US";
        setUtterance2(en);
        return () => {
            synth.cancel();
        };
    }, [visibleIndex]);
//fin
    const convertirvocales =
    {
        0: { name: "p" },
        1: { name: 'q' },
        2: { name: "r" },
        3: { name: "s" },
        4: { name: "t" },
    }

    return (

        <div className='section-container'>
            <div className='esengmain'>
                <div className='eng'> <button onClick={() => { handlePlay_en() }}>  <img src={uk} alt='' id='uk' /></button> </div>
                <div className='es'> <button onClick={() => { handlePlay_es() }}> <img src={spain} alt='' id='spain' /></button></div>
            </div>

            <div className='A-E' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                <div className='vocals'>
                    <img src={P} alt='' id='P' />
                </div>
                <div className='vocals'>
                    <img src={psign} alt='' id='psign' />
                </div>
            </div>

            <div className='A-E' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                <div className='vocals'>
                    <img src={Q} alt='' id='Q' />
                </div>
                <div className='vocals'>
                    <img src={qsign} alt='' id='qsign' />
                </div>
            </div>

            <div className='A-E' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                <div className='vocals'>
                    <img src={R} alt='' id='R' />
                </div>
                <div className='vocals'>
                    <img src={rsign} alt='' id='rsign' />
                </div>
            </div>

            <div className='A-E' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                <div className='vocals'>
                    <img src={S} alt='' id='S' />
                </div>
                <div className='vocals'>
                    <img src={ssign} alt='' id='ssign' />
                </div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                <div className='vocals'>
                    <img src={T} alt='' id='T' />
                </div>
                <div className='vocals'>
                    <img src={tsign} alt='' id='tsign' />
                </div>
            </div>
            <div className='A-O'>
                <input className='vocals' id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
            </div>
        </div>
    )
}

export default SectionPT;
