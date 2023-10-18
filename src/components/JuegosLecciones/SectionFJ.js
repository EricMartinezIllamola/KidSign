import React, { useState, useEffect } from 'react';
import F from '../../assets/letters/F.png';
import fsign from '../../assets/letterssign/fsign.png';
import G from '../../assets/letters/G.png';
import gsign from '../../assets/letterssign/gsign.png';
import H from '../../assets/letters/H.png';
import hsign from '../../assets/letterssign/hsign.png';
import I from '../../assets/letters/I.png';
import isign from '../../assets/letterssign/isign.png';
import J from '../../assets/letters/J.png';
import jsign from '../../assets/letterssign/jsign.png';
import arrowD from '../../assets/arrowD.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import "../../styles/Lecciones.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SectionFJ = () => {

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
        0: { name: "f" },
        1: { name: 'g' },
        2: { name: "h" },
        3: { name: "i" },
        4: { name: "j" },
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
                    <div className='vocals'><img src={F} alt='' id='F' /></div>
                    <div className='vocals'><img src={fsign} alt='' id='fsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={G} alt='' id='G' /></div>
                    <div className='vocals'><img src={gsign} alt='' id='gsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                    <div className='vocals'> <img src={H} alt='' id='H' /></div>
                    <div className='vocals'><img src={hsign} alt='' id='hsign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                    <div className='vocals'> <img src={I} alt='' id='I' /></div>
                    <div className='vocals'><img src={isign} alt='' id='isign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={J} alt='' id='J' /></div>
                    <div className='vocals'><img src={jsign} alt='' id='jsign' /></div>
                </div>

                <div className='A-O'>
                    <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
                </div>
            </div>

            <div className='section_down section_alphabet'>
                <Link to={'/Officialpage'}> <button className='leccion_exit'>{t("Games.BtnExit")}</button></Link>
                <Link to={'/SelecGamFJ'} style={{ visibility: end ? 'visible' : 'hidden' }} ><button className='leccion_continue'>{t("Games.BtnNext")}</button></Link>
            </div>
        </div >
    )
}

export default SectionFJ;
