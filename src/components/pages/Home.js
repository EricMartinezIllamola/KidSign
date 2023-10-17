import React, { useEffect } from 'react';
import '../../styles/Home.css';
import verdetrans from '../../assets/Mainimagenes/verdetrans.png';


const Home = () => {

  const pixel = () => {
    const h = 20;
    const w = 20;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        let span = document.createElement("span");
        let random = Math.random() * 0.8;
        let randomFixed = random.toFixed(2);

        document.getElementById("pixel").appendChild(span);
        span.style.left = j * 25 + "px";
        span.style.top = i * 25 + "px";
        span.style.backgroundPosition = -j * 25 + "px " + -i * 25 + "px, center";
        span.style.animationDelay = randomFixed + "s";
      }
    }
  }

  useEffect( () => {
    pixel();
  }, [])
  

  return (
    <div className='home' id='Home'>
      {/* <img src={verdetrans} alt='' id='verdetrans' /> */}
      <div className='home_box'>
        <div id='pixel'></div>
      </div>
    </div>
  );
}

export default Home;