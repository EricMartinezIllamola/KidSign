import React, { useState, useEffect } from 'react';
import K from '../../assets/letters/K.png';
import ksign from '../../assets/letterssign/ksign.png';
import L from '../../assets/letters/L.png';
import lsign from '../../assets/letterssign/lsign.png';
import M from '../../assets/letters/M.png';
import msign from '../../assets/letterssign/msign.png';
import N from '../../assets/letters/N.png';
import nsign from '../../assets/letterssign/nsign.png';
import O from '../../assets/letters/O.png';
import osign from '../../assets/letterssign/osign.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import arrowD from '../../assets/arrowD.png';
import "../../styles/Lecciones.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SectionKO = () => {

    const [t, i18n] = useTranslation("games"); //traduccion

    const [visibleIndex, setVisibleIndex] = useState(0);
    const [utterance, setUtterance] = useState(null);
    const [utterance2, setUtterance2] = useState(null);
    const [end, setEnd] = useState(false);

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
        es.lang = "es-US";
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
        0: { name: "k" },
        1: { name: 'l' },
        2: { name: "m" },
        3: { name: "n" },
        4: { name: "o" },
    }

    useEffect(() => {
        if (visibleIndex === 4) {
            setEnd(true);
        }
    }, [visibleIndex])

    return (
        <div className='lecciones_container'>

            <div className='section_up section_alphabet'>
                <img src={uk} alt='' id='uk' onClick={() => { handlePlay_en() }} />
                <img src={spain} alt='' id='spain' onClick={() => { handlePlay_es() }} />
            </div>

            <div className='section_mid section_alphabet' >

                <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={K} alt='' id='K' /></div>
                    <div className='vocals'><img src={ksign} alt='' id='ksign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={L} alt='' id='L' /></div>
                    <div className='vocals'><img src={lsign} alt='' id='lsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                    <div className='vocals'> <img src={M} alt='' id='M' /></div>
                    <div className='vocals'><img src={msign} alt='' id='msign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={N} alt='' id='N' /></div>
                    <div className='vocals'><img src={nsign} alt='' id='nsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={O} alt='' id='O' /></div>
                    <div className='vocals'><img src={osign} alt='' id='osign' /></div>
                </div>

                <div className='A-O'>
                    <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
                </div>
            </div>

            <div className='section_down section_alphabet'>
                <Link to={'/Officialpage'}> <button className='leccion_exit'>{t("Games.BtnExit")}</button></Link>
                <Link to={'/SelecGamKO'} style={{ visibility: end ? 'visible' : 'hidden' }} ><button className='leccion_continue'>{t("Games.BtnNext")}</button></Link>
            </div>
        </div >
    )
}

export default SectionKO;
