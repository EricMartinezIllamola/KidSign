import React, { useState, useEffect } from 'react';
import A from '../../assets/letters/A.png';
import asign from '../../assets/letterssign/asign.png';
import B from '../../assets/letters/B.png';
import bsign from '../../assets/letterssign/bsign.png';
import C from '../../assets/letters/C.png';
import csign from '../../assets/letterssign/csign.png';
import D from '../../assets/letters/D.png';
import dsign from '../../assets/letterssign/dsign.png';
import E from '../../assets/letters/E.png';
import esign from '../../assets/letterssign/esign.png';
import arrowD from '../../assets/arrowD.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import "../../styles/Lecciones.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SectionAE = () => {

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
        setVisibleIndex(nextIndex);
    };

    // audio usestate
    useEffect(() => {
        const synth = window.speechSynthesis;
        const es = new SpeechSynthesisUtterance(convertirae[visibleIndex]['name']);
        es.lang = "es-ES";
        setUtterance(es);
        const en = new SpeechSynthesisUtterance(convertirae[visibleIndex]['name']);
        en.lang = "en-US";
        setUtterance2(en);
        return () => {
            synth.cancel();
        };
    }, [visibleIndex]);
    //fin
    const convertirae =
    {
        0: { name: "a" },
        1: { name: 'b' },
        2: { name: "c" },
        3: { name: "d" },
        4: { name: "e" },
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
                    <div className='vocals'> <img src={A} alt='' id='A' /></div>
                    <div className='vocals'><img src={asign} alt='' id='asign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={B} alt='' id='B' /></div>
                    <div className='vocals'><img src={bsign} alt='' id='bsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={C} alt='' id='C' /></div>
                    <div className='vocals'><img src={csign} alt='' id='csign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={D} alt='' id='D' /></div>
                    <div><img src={dsign} alt='' id='dsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={E} alt='' id='E' /></div>
                    <div><img src={esign} alt='' id='esign' /></div>
                </div>

                <div className='A-O'>
                    <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
                </div>
            </div>

            <div className='section_down section_alphabet'>
                <Link to={'/Officialpage'}> <button className='leccion_exit'>{t("Games.BtnExit")}</button></Link>
                <Link to={'/SelecGamAE'} style={{ visibility: end ? 'visible' : 'hidden' }} ><button className='leccion_continue'>{t("Games.BtnNext")}</button></Link>
            </div>
        </div>
    );
}

export default SectionAE;