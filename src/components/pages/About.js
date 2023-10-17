import React from 'react';
import aboutcohete from '../../assets/Mainimagenes/aboutcohete.png';
import aboutsign from '../../assets/Mainimagenes/aboutsign.png';
import aboutbook from '../../assets/Mainimagenes/aboutbook.png';
import '../../styles/App.css';

const About = () => {
  return (
    <div className='about' id='About'>
      <h2>About Us</h2>
      <div className='aboutcontent'>
        <img src={aboutcohete} alt='' id='aboutcohete' />
        <h3 className='h2about'> MISSION  </h3>
      </div>
      <p className='pabout'> En Kidsign creemos que la educación debe ser accesible para todos. Nuestra missión es poder llegar a dar una experiencia de aprendizaje similar tanto para personas con discapacidad auditiva, como para personas oyentes. Por lo tanto, hacemos una introducción al lenguaje de los signos americanos(ASL) que nos permite acabar con las barreras de la comunicación y generar una educación inclusiva. </p>
      <div className='aboutcontent'>
        <img src={aboutsign} alt='' id='aboutsign' />
        <h3 className='h2about'> STORY BEHIND KIDSIGN </h3>
      </div>
      <p className='pabout'> KidSign tuvo su nacimiento a partir de la idea de hacer uso se la inteligencia Artificial para crear un proyecto que tuviera un impacto. Al investigar sobre Apps dedicadas a los niños con discapacidad auditiva, nos dimos cuenta de que no existían aplicaciones que fueran entretenidas y ayudaran a aprendez el lenguaje de los signos. Esto nos motivo a crear una App que cubriera la carencia de un aprendizaje simple y efectivo.</p>
      <div className='aboutcontent'>
        <img src={aboutbook} alt='' id='aboutbook' />
        <h3 className='h2about'> LEARNING METHOD </h3>
      </div>
      <p className='pabout'>  Creemos que cualquiera puede iniciarse a aprender el lenguage de los signos(ASL) con Kidsign. Esto es possible graciad a la Inteligencia Artifical con la que hemos implementado  un modelo que reconoce el lenguage de los signos. Nuestras lecciones son cortas y estan diseñadas para disfrutar, jugar y aprender. Al utilizar este método, se fomenta la retención  a largo plazo del contenido, que al ser distribuido en pequeñas lecciones, ayuda a estudiar y incentivar el aprendizaje. </p>
    </div>
  );
}

export default About;