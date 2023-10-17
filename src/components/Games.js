import Section1 from './JuegoVocales/Section1';
import SectionAE from './JuegosLetra/SectionAE';
import SectionFJ from './JuegosLetra/SectionFJ';
import SectionKO from './JuegosLetra/SectionKO';
import SectionPT from './JuegosLetra/SectionPT';
import SectionUZ from './JuegosLetra/SectionUZ';
import Sectionnumbers from './JuegoNumManoVideo/Sectionnumbers';
import Login from './Login';

const Games = () => {
    return (
        <div className="Games">
            <Login/>
            <Section1 />
            <SectionAE />
            <SectionFJ />
            <SectionKO />
            <SectionPT />
            <SectionUZ />
            <Sectionnumbers />
        </div>
    )
}

export default Games