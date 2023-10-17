import React, {useState, useEffect} from 'react';
import U from '../../assets/letters/U.png';
import usign from '../../assets/letterssign/usign.png';
import V from '../../assets/letters/V.png';
import vsign from '../../assets/letterssign/vsign.png';
import W from '../../assets/letters/W.png';
import wsign from '../../assets/letterssign/wsign.png';
import X from '../../assets/letters/X.png';
import xsign from '../../assets/letterssign/xsign.png';
import Y from '../../assets/letters/Y.png';
import ysign from '../../assets/letterssign/ysign.png';
import Z from '../../assets/letters/Z.png';
import zsign from '../../assets/letterssign/zsign.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import arrowD from '../../assets/arrowD.png';
import "../../styles/App.css";

const SectionUZ = () => {
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
        const nextIndex = (visibleIndex + 1) % 6;
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
        0: { name: "u" },
        1: { name: 'v' },
        2: { name: "w" },
        3: { name: "x" },
        4: { name: "y" },
    }

  return (
    <div className='section-container'>
            <div className='esengmain'>
                <div className='eng'> <button onClick={() => { handlePlay_en() }}>  <img src={uk} alt='' id='uk' /></button> </div>
                <div className='es'> <button onClick={() => { handlePlay_es() }}> <img src={spain} alt='' id='spain' /></button></div>
            </div>
    <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
        <div className='vocals'> <img src={U} alt='' id='U' /></div>
        <div className='vocals'> <img src={usign} alt='' id='usign' /></div>
    </div>

    <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
        <div className='vocals'> <img src={V} alt='' id='V' /></div>
        <div className='vocals'><img src={vsign} alt='' id='vsign' /></div>
    </div>

    <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
        <div className='vocals'><img src={W} alt='' id='W' /></div>
        <div className='vocals'><img src={wsign} alt='' id='wsign' /></div>
    </div>

    <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
        <div className='vocals'> <img src={X} alt='' id='X' /></div>
        <div className='vocals'> <img src={xsign} alt='' id='xsign' /></div>
    </div>
    <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
        <div className='vocals'><img src={Y} alt='' id='Y' /></div>
        <div className='vocals'><img src={ysign} alt='' id='ysign' /></div>
    </div>
          <div className='A-Z' style={{ display: visibleIndex === 5 ? 'flex' : 'none' }}>
              <div> <img src={Z} alt='Z' id='Z' /></div>
              <div><img src={zsign} alt='zsign' id='zsign' /></div>
          </div>
    <div className='A-O'>
        <input className='vocals' id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
    </div>
</div>

  )
}

export default SectionUZ;
