import React, { useState } from 'react';
import P from '../assets/letters/P.png';
import psign from '../assets/letterssign/psign.png';
import Q from '../assets/letters/Q.png';
import qsign from '../assets/letterssign/qsign.png';
import R from '../assets/letters/R.png';
import rsign from '../assets/letterssign/rsign.png';
import S from '../assets/letters/S.png';
import ssign from '../assets/letterssign/ssign.png';
import T from '../assets/letters/T.png';
import tsign from '../assets/letterssign/tsign.png';
import uk from '../assets/uk.png';
import spain from '../assets/spain.png';
import arrowD from '../assets/arrowD.png'
import '../App.css';

const VSectionPT = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const switchVisible = () => {
        // Calculate the index of the next div to show
        const nextIndex = (visibleIndex + 1) % 5;
        setVisibleIndex(nextIndex)
    };

    return (

        <div className='section-container' id='ValphabetPT'>

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
            <div className='videopart'>
                <div> VIDEO </div>
            </div>
            <div className='esengmain'>
                <div className='eng'> <button> <img src={uk} alt='' id='uk' /></button> </div>
                <div className='es'> <button> <img src={spain} alt='' id='spain' /></button></div>
            </div>
            <div className='A-O'>
                <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
            </div>

        </div>
    )
}

export default VSectionPT;
