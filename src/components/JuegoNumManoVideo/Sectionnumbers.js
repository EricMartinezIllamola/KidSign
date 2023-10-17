import React, {useState} from 'react';
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
import '../../styles/App.css';

const Sectionnumbers = () => {

    const [visibleIndex, setVisibleIndex] = useState(0);

    const switchVisible = () => {
        // Calculate the index of the next div to show
        const nextIndex = (visibleIndex + 1) % 10;
        setVisibleIndex(nextIndex)
    };

    return (
        <div className='section-numbers' id='numbers'>
            <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                <div><img src={zero} alt='' id='zero' /></div>
                <div><img src={zerosign} alt='' id='zerosign' /></div>
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

            <div className='A-Z' style={{ display: visibleIndex === 5 ? 'flex' : 'none' }}>
                <div> <img src={five} alt='' id='five' /></div>
                <div><img src={fivesign} alt='' id='fivesign' /></div>
            </div>

            <div className='A-Z' style={{ display: visibleIndex === 6 ? 'flex' : 'none' }}>
                <div><img src={six} alt='' id='six' /></div>
                <div><img src={sixsign} alt='' id='sixsign' /></div>
            </div>

            <div className='A-Z' style={{ display: visibleIndex === 7 ? 'flex' : 'none' }}>
                <div><img src={seven} alt='' id='seven' /></div>
                <div><img src={sevensign} alt='' id='sevensign' /></div>
            </div>

            <div className='A-Z' style={{ display: visibleIndex === 8 ? 'flex' : 'none' }}>
                <div> <img src={eight} alt='' id='eight' /></div>
                <div> <img src={eightsign} alt='' id='eightsign' /></div>
            </div>

            <div className='A-Z' style={{ display: visibleIndex === 9 ? 'flex' : 'none' }}>
                <div> <img src={nine} alt='' id='nine' /></div>
                <div><img src={ninesign} alt='' id='ninesign' /> </div>
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

export default Sectionnumbers;
