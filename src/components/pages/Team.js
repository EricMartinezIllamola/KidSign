import React from 'react';
import '../../styles/Team.css';
import foto from '../../assets/foto.jpg';
import alex from '../../assets/Alex_Cosme.jpg';
import saira from '../../assets/IMG_8058_Facetune_19-01-2019-19-13-59.jpg';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Team = () => {
  return (
    <div className='team-container' id='Team'>
      <h2>Our Team</h2>
      <div class="team_box">
        <div class="card">
          <div class="img-container">
            <img src={foto} alt='eric' id='eric' />
          </div>
          <h3> Èric Martínez</h3>
          <p className='team_funcion'> Data Analyst</p>
          <div class="contact-container">
          <a href='https://www.linkedin.com/in/ericmartinezillamola' target="_blank"><img src={linkedin} alt='linkedin' className='linkedin' /></a>
          <a href="https://github.com/ericmartinezillamola" target="_blank"><img src={github} alt='github' className='github' /></a>
          </div>
        </div>
        <div class="card">
          <div class="img-container">
            <img src={alex} alt='' id='alex' />
          </div>
          <h3>Alex Cosme</h3>
          <p className='team_funcion'>Backend Developer</p>
          <div class="contact-container">
            <a href='https://www.linkedin.com/in/alex-cosme' target="_blank"><img src={linkedin} alt='linkedin' className='linkedin' /></a>
            <a href="https://github.com/CosmeAC" target="_blank"><img src={github} alt='github' className='github' /></a>
          </div>
        </div>
        <div class="card">
          <div class="img-container">
            <img src={saira} alt='' id='saira' />
          </div>
          <h3>Saira Zulfiqar</h3>
          <p className='team_funcion'> Frontend Developer</p>
          <div class="contact-container">
          <a href='https://www.linkedin.com/in/sairazulfiqar' target="_blank"><img src={linkedin} alt='linkedin' className='linkedin' /></a>
          <a href="" target="_blank"><img src={github} alt='github' className='github' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;