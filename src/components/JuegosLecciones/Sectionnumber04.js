import React, { useState, useEffect } from 'react';
import zero from '../../assets/numbers/zero.png';
import zerosign from '../../assets/numbers/zerosign.png';
import one from '../../assets/numbers/one.png';
import onesign from '../../assets/numbers/onesign.png';
import two from '../../assets/numbers/two.png';
import twosign from '../../assets/numbers/twosign.png';
import three from '../../assets/numbers/three.png';
import threesign from '../../assets/numbers/threesign.png';
import four from '../../assets/numbers/four.png';
import foursign from '../../assets/numbers/foursign.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import arrowD from '../../assets/arrowD.png'
import "../../styles/Lecciones.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sectionnumber04 = () => {

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
        0: { name: "0" },
        1: { name: '1' },
        2: { name: "2" },
        3: { name: "3" },
        4: { name: "4" },
    }

    useEffect(() => {
        if (visibleIndex === 4) {
            setEnd(true);
        }
    }, [visibleIndex])

    return (
        <div className='lecciones_container'>

            <div className='section_up section_num'>
                <div className='eng'> <button onClick={() => { handlePlay_en() }}>  <img src={uk} alt='' id='uk' /></button> </div>
                <div className='es'> <button onClick={() => { handlePlay_es() }}> <img src={spain} alt='' id='spain' /></button></div>
            </div>

            <div className='section_mid section_num' >
                <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                    <div> <img src={zero} alt='' id='zero' /> </div>
                    <div> <img src={zerosign} alt='' id='zerosign' /> </div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                    <div> <img src={one} alt='' id='one' /></div>
                    <div> <img src={onesign} alt='' id='onesign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                    <div> <img src={two} alt='' id='two' /></div>
                    <div><img src={twosign} alt='' id='twosign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                    <div> <img src={three} alt='' id='three' /></div>
                    <div> <img src={threesign} alt='' id='threesign' /></div>
                </div>

                <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                    <div> <img src={four} alt='' id='four' /></div>
                    <div> <img src={foursign} alt='' id='foursign' /></div>
                </div>

                <div className='A-O'>
                    <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
                </div>
            </div>

            <div className='section_down section_num'>
                <Link to={'/Officialpage'}> <button className='leccion_exit'>{t("Games.BtnExit")}</button></Link>
                <Link to={'/SelecGam04'} style={{ visibility: end ? 'visible' : 'hidden' }}><button className='leccion_continue'>{t("Games.BtnNext")}</button></Link>
            </div>
        </div>
    )
}

export default Sectionnumber04;
