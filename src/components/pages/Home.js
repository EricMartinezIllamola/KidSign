import React from 'react';
import '../../styles/Home.css';
import KSlogo from '../../assets/Mainimagenes/KSlogo.png';
import co from '../../assets/co.png';
import codown from '../../assets/codown.png';
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className='home text-2xl' id='Home'>
      <div className='home-items'>
        <img className='.animate__animated .animate__heartBeat' src={KSlogo} alt='' id='KSlogo' />
        <div className='static'>
          <h2>
            <span>
              <ReactTyped strings={["Let's Learn and have fun", "Let's play and explore", "Let's make a change"]}
                typeSpeed={70}
                loop={true}
                loopbackSpeed={10}
                repeat={Infinity}
                cursorChar="|"
                deleteSpeed={20}
                delaySpeed={1000}
                showCursor={false}
              />
            </span>
          </h2>
          <br></br>
        </div>
        {/* <div id='itemm1'> 
          <p>Let's Learn & have fun </p>  
        </div>    */}
        <img src={co} alt='co' id='co' />
        <img src={codown} alt='codown' id='codown' />
        <img src={codown} alt='coleft' id='coleft' />
      </div>
    </div>
  );
}

export default Home;