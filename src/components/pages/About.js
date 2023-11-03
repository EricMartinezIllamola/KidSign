import React from 'react'; 
import aboutcohete from '../../assets/Mainimagenes/aboutcohete.png';
import aboutsign from '../../assets/Mainimagenes/aboutsign.png';
import aboutbook from '../../assets/Mainimagenes/aboutbook.png';
import '../../styles/About.css';

const About = () => {
  return (
    <div className='about-container' id='About'>
      <div><h1>ABOUT US</h1> </div>
      <div className='about-box'>
        <div className='about-card'> 
          <div className='img-container'> <img className='image' src={aboutcohete} alt='' id='aboutcohete' /> </div>
          <h2> MISSION </h2>
          <p className='about-content'> En Kidsign creemos que la educación debe ser accesible para todos. Nuestra missión es poder llegar a dar una experiencia de aprendizaje similar tanto para personas con discapacidad auditiva, como para personas oyentes. Por lo tanto, hacemos una introducción al lenguaje de los signos americanos(ASL) que nos permite acabar con las barreras de la comunicación y generar una educación inclusiva y de calidad. </p> <br />
        </div>
        <div className='about-card'>
          <div className='img-container'> <img  className='image' src={aboutsign} alt='' id='aboutsign' /> </div>
          <h2> STORY BEHIND KIDSIGN </h2> 
          <p className='about-content'> KidSign tuvo su nacimiento a partir de la idea de hacer uso se la inteligencia Artificial para crear un proyecto que tuviera un impacto. Al investigar sobre Apps dedicadas a los niños con discapacidad auditiva, nos dimos cuenta de que no existían aplicaciones que fueran entretenidas y ayudaran a aprendez el lenguaje de los signos. Esto nos motivo a crear una App que cubriera la carencia de un aprendizaje simple y efectivo.</p> <br />
        </div>
        <div className='about-card'>
          <div className='img-container'> <img className='image' src={aboutbook} alt='' id='aboutbook' /> </div>
          <h2> LEARNING METHOD </h2>
          <p className='about-content'>  Creemos que cualquiera puede iniciarse a aprender el lenguage de los signos con Kidsign. Esto es possible graciad a la Inteligencia Artifical con la que hemos implementado  un modelo que reconoce el lenguage de los signos. Nuestras lecciones son cortas y estan diseñadas para disfrutar, jugar y aprender. Al utilizar este método, se fomenta la retención  a largo plazo del contenido, que al ser distribuido en pequeñas lecciones, ayuda a estudiar y incentivar el aprendizaje. </p> <br />
        </div>
      </div>
    </div>
    
  );
}


export default About;