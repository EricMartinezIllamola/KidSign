import React, {useState} from 'react';
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
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import arrowD from '../../assets/arrowD.png'
import '../../App.css';

const VSectionAE = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const switchVisible = () => {
            // Calculate the index of the next div to show
    const nextIndex = (visibleIndex + 1) % 5;
    setVisibleIndex(nextIndex);
  };


    return (
        <div className='section-container'>

            <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none'}}> 
                <div className='vocals'> <img src={A} alt='' id='A' /></div>
                <div className='vocals'><img src={asign} alt='' id='asign'/></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none'}}>
                <div className='vocals'><img src={B} alt='' id='B'/></div>
                <div className='vocals'><img src={bsign} alt='' id='bsign'/></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                <div className='vocals'><img src={C} alt='' id='C'/></div>
                <div className='vocals'><img src={csign} alt='' id='csign'/></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                <div className='vocals'><img src={D} alt='' id='D'/></div>
                <div><img src={dsign} alt='' id='dsign'/></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                <div className='vocals'><img src={E} alt='' id='E'/></div>
                <div><img src={esign} alt='' id='esign'/></div>
            </div>

            <div className='videopart' id='ValphabetAE'>
                <div> VIDEO </div>
            </div>
            <div className='AEIOU'>
                <input id="Button1" type="image" src={arrowD} alt='' onClick={switchVisible} />
            </div>
            <div className='esengmain'> 
                <div className='eng'> <button> <img src={uk} alt='' id='uk'/></button> </div>
                <div className='es'> <button> <img src={spain} alt='' id='spain'/></button></div>
            </div>

        </div>
    );
}

export default VSectionAE;
