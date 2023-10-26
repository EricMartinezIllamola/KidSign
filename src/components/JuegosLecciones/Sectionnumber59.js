import React, { useState, useEffect } from 'react';
import five from '../../assets/numbers/five.png';
import fivesign from '../../assets/numbers/fivesign.png';
import six from '../../assets/numbers/six.png';
import sixsign from '../../assets/numbers/sixsign.png';
import seven from '../../assets/numbers/seven.png';
import sevensign from '../../assets/numbers/sevensign.png';
import eight from '../../assets/numbers/eight.png';
import eightsign from '../../assets/numbers/eightsign.png';
import nine from '../../assets/numbers/nine.png';
import ninesign from '../../assets/numbers/ninesign.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import arrowD from '../../assets/arrowD.png'
import "../../styles/Lecciones.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sectionnumber59 = () => {

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
        0: { name: "5" },
        1: { name: '6' },
        2: { name: "7" },
        3: { name: "8" },
        4: { name: "9" },
    }

    useEffect(() => {
        if (visibleIndex === 4) {
            setEnd(true);
        }
    }, [visibleIndex])

    return (
        <div className='lecciones_container'>

            <div className='section_up section_num'>
                <img src={uk} alt='' id='uk' onClick={() => { handlePlay_en() }} />
                <img src={spain} alt='' id='spain' onClick={() => { handlePlay_es() }} />
            </div>

            <div className='section_mid section_num' >
                <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                    <div> <img src={five} alt='' id='five' /></div>
                    <div><img src={fivesign} alt='' id='fivesign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                    <div><img src={six} alt='' id='six' /></div>
                    <div><img src={sixsign} alt='' id='sixsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                    <div><img src={seven} alt='' id='seven' /></div>
                    <div><img src={sevensign} alt='' id='sevensign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                    <div> <img src={eight} alt='' id='eight' /></div>
                    <div> <img src={eightsign} alt='' id='eightsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                    <div> <img src={nine} alt='' id='nine' /></div>
                    <div><img src={ninesign} alt='' id='ninesign' /> </div>
                </div>

                <div className='A-O'>
                    <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
                </div>
            </div>

            <div className='section_down section_num'>
                <Link to={'/Officialpage'}> <button className='leccion_exit'>{t("Games.BtnExit")}</button></Link>
                <Link to={'/SelecGam59'} style={{ visibility: end ? 'visible' : 'hidden' }} ><button className='leccion_continue'>{t("Games.BtnNext")}</button></Link>
            </div>
        </div>
    )
}

export default Sectionnumber59;
