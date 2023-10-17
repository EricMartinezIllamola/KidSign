import React, {useState,useEffect} from 'react';
import './styles/App.css';
import Main from './components/Main';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Officialpage from './components/Officialpage';
import Sectionnumbers from './components/JuegoNumManoVideo/Sectionnumbers';
import Jugadores from './components/Jugadores';
import PlayerSelector from './components/PlayerSelector';

//Seleccionar JuegosV 1 Jugador o 2 Jugadores
import SelecGamNum from './components/SeleccJugadores/SelecGamNum '
import SelecGam04 from './components/SeleccJugadores/SelecGam04'
import SelecGam59 from './components/SeleccJugadores/SelecGam59'
import SelecGamVocales from './components/SeleccJugadores/SelecGamVocales'
import SelecGamAE from './components/SeleccJugadores/SelecGamAE'
import SelecGamFJ from './components/SeleccJugadores/SelecGamFJ'
import SelecGamKO from './components/SeleccJugadores/SelecGamKO'
import SelecGamPT from './components/SeleccJugadores/SelecGamPT'
import SelecGamUZ from './components/SeleccJugadores/SelecGamUZ'
import SelecGamAlphabet from './components/SeleccJugadores/SelecGamAlphabet'
import SelecGamGlobal from './components/SeleccJugadores/SelecGamGlobal'
//SIN AYUDA-Seleccionar JuegosV 1 Jugador o 2 Jugadores 
import SelecGamNumSin from './components/SeleccJugadores/SelecGamNumSin'
import SelecGam04Sin from './components/SeleccJugadores/SelecGam04Sin'
import SelecGam59Sin from './components/SeleccJugadores/SelecGam59Sin'
import SelecGamVocalesSin from './components/SeleccJugadores/SelecGamVocalesSin'
import SelecGamAESin from './components/SeleccJugadores/SelecGamAESin'
import SelecGamFJSin from './components/SeleccJugadores/SelecGamFJSin'
import SelecGamKOSin from './components/SeleccJugadores/SelecGamKOSin'
import SelecGamPTSin from './components/SeleccJugadores/SelecGamPTSin'
import SelecGamUZSin from './components/SeleccJugadores/SelecGamUZSin'
import SelecGamAlphabetSin from './components/SeleccJugadores/SelecGamAlphabetSin'
import SelecGamGlobalSin from './components/SeleccJugadores/SelecGamGlobalSin'

//Leccion
import Section1 from './components/JuegosLecciones/Section1';
import SectionAE from './components/JuegosLecciones/SectionAE'
import SectionFJ from './components/JuegosLecciones/SectionFJ'
import SectionKO from './components/JuegosLecciones/SectionKO'
import SectionPT from './components/JuegosLecciones/SectionPT'
import SectionUZ from './components/JuegosLecciones/SectionUZ'
import Sectionnumber04 from './components/JuegosLecciones/Sectionnumber04'
import Sectionnumber59 from './components/JuegosLecciones/Sectionnumber59'
//Camara
import Cam_Num from './components/JuegoVideo/Cam_Num'
import Cam_Num_2J from './components/JuegoVideo/Cam_Num_2J'
import Cam_04 from './components/JuegoVideo/Cam_04'
import Cam_04_2J from './components/JuegoVideo/Cam_04_2J'
import Cam_59 from './components/JuegoVideo/Cam_59'
import Cam_59_2J from './components/JuegoVideo/Cam_59_2J'
import Cam_Glob from './components/JuegoVideo/Cam_Glob'
import Cam_Glob_2J from './components/JuegoVideo/Cam_Glob_2J'
import Cam_Alphabet from './components/JuegoVideo/Cam_Alphabet'
import Cam_Alphabet_2J from './components/JuegoVideo/Cam_Alphabet_2J'
import Cam_Vocales from './components/JuegoVideo/Cam_Vocales'
import Cam_Vocales_2J from './components/JuegoVideo/Cam_Vocales_2J'
import Cam_AE from './components/JuegoVideo/Cam_AE'
import Cam_AE_2J from './components/JuegoVideo/Cam_AE_2J'
import Cam_FJ from './components/JuegoVideo/Cam_FJ'
import Cam_FJ_2J from './components/JuegoVideo/Cam_FJ_2J'
import Cam_KO from './components/JuegoVideo/Cam_KO'
import Cam_KO_2J from './components/JuegoVideo/Cam_KO_2J'
import Cam_PT from './components/JuegoVideo/Cam_PT'
import Cam_PT_2J from './components/JuegoVideo/Cam_PT_2J'
import Cam_UZ from './components/JuegoVideo/Cam_UZ'
import Cam_UZ_2J from './components/JuegoVideo/Cam_UZ_2J'


//Juego Relacionar
import QuizzVocales from './components/JuegoRelacionar/quizz_vocales'
import QuizzAE from './components/JuegoRelacionar/quizz_AE'
import QuizzFJ from './components/JuegoRelacionar/quizz_FJ'
import QuizzKO from './components/JuegoRelacionar/quizz_KO'
import QuizzPT from './components/JuegoRelacionar/quizz_PT'
import QuizzUZ from './components/JuegoRelacionar/quizz_UZ'
import Quizz04 from './components/JuegoRelacionar/quizz_04'
import Quizz59 from './components/JuegoRelacionar/quizz_59'
import QuizzNums from './components/JuegoRelacionar/quizz_nums'
import QuizzAlphabet from './components/JuegoRelacionar/quizz_alphabet'
import QuizzGlobal from './components/JuegoRelacionar/quizz_global'


//Memori
import MemoryGameAE from './components/juegoMemori/MemoryGameAE'
import MemoryGameFJ from './components/juegoMemori/MemoryGameFJ'
import MemoryGameKO from './components/juegoMemori/MemoryGameKO'
import MemoryGamePT from './components/juegoMemori/MemoryGamePT'
import MemoryGameUZ from './components/juegoMemori/MemoryGameUZ'
import MemoryGameVocales from './components/juegoMemori/MemoryGameVocales'
import MemoryGamenum from './components/juegoMemori/MemoryGamenum'
import MemoryGamenum69 from './components/juegoMemori/MemoryGamenum69'
import MemoryGameglobal from './components/juegoMemori/MemoryGameglobal' //memori global numeros
// import MemoryGamegloballetras from './components/juegoMemori/MemoryGamegloballetras';
//memeori global

//Camara Sin Ayuda
import Cam_NumSin from './components/JuegoVideo/Cam_NumSin'
import Cam_NumSin_2J from './components/JuegoVideo/Cam_NumSin_2J'
import Cam_04Sin from './components/JuegoVideo/Cam_04Sin'
import Cam_04Sin_2J from './components/JuegoVideo/Cam_04Sin_2J'
import Cam_59Sin from './components/JuegoVideo/Cam_59Sin'
import Cam_59Sin_2J from './components/JuegoVideo/Cam_59Sin_2J'
import Cam_GlobSin from './components/JuegoVideo/Cam_GlobSin'
import Cam_GlobSin_2J from './components/JuegoVideo/Cam_GlobSin_2J'
import Cam_AlphabetSin from './components/JuegoVideo/Cam_AlphabetSin'
import Cam_AlphabetSin_2J from './components/JuegoVideo/Cam_AlphabetSin_2J'
import Cam_VocalesSin from './components/JuegoVideo/Cam_VocalesSin'
import Cam_VocalesSin_2J from './components/JuegoVideo/Cam_VocalesSin_2J'
import Cam_AESin from './components/JuegoVideo/Cam_AESin'
import Cam_AESin_2J from './components/JuegoVideo/Cam_AESin_2J'
import Cam_FJSin from './components/JuegoVideo/Cam_FJSin'
import Cam_FJSin_2J from './components/JuegoVideo/Cam_FJSin_2J'
import Cam_KOSin from './components/JuegoVideo/Cam_KOSin'
import Cam_KOSin_2J from './components/JuegoVideo/Cam_KOSin_2J'
import Cam_PTSin from './components/JuegoVideo/Cam_PTSin'
import Cam_PTSin_2J from './components/JuegoVideo/Cam_PTSin_2J'
import Cam_UZSin from './components/JuegoVideo/Cam_UZSin'
import Cam_UZSin_2J from './components/JuegoVideo/Cam_UZSin_2J'




// import Webcam from "react-webcam";

function App() {
  const { user, isAuthenticated } = useAuth0();
// Agrega un estado para controlar si los datos del usuario se han guardado
const [userDataSaved, setUserDataSaved] = useState(false);

useEffect(() => {
  if ( !userDataSaved && isAuthenticated) {
    // El usuario ha iniciado sesión con éxito y los datos aún no se han guardado
    // Obtén el ID de usuario del objeto "user" proporcionado por Auth0
    const userId = user.sub; // "sub" es la propiedad que contiene el ID de usuario
    const username = user.nickname;
    const email = user.email;
    // Crea un objeto con los datos del usuario
    const userData = {
      id: userId,
      username: username,
      email: email,
    };
    console.log(userData)
    // Realiza una solicitud POST para guardar los datos del usuario
    axios.post('http://localhost:5000/perfil', userData)
      .then(response => {
        // Maneja la respuesta del servidor, si es necesario
        setUserDataSaved(true); // Marca los datos como guardados para evitar repeticiones
      })
      .catch(error => {
        // Maneja errores de la solicitud, si es necesario
        console.error('Error al guardar datos del usuario:', error);
      });
  }
}, [ userDataSaved, user]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> {/* Donde se ve */}
          <Route path="/Officialpage" element={<Officialpage />} /> {/* Donde se ve los botones para jugar*/}
          {/*Juegos Leccion*/}
            <Route path="/Section1" element={< Section1/>} />
            <Route path="/SectionAE" element={< SectionAE/>} />
            <Route path="/SectionFJ" element={< SectionFJ />} />
            <Route path="/SectionKO" element={< SectionKO />} />
            <Route path="/SectionPT" element={< SectionPT />} />
            <Route path="/SectionUZ" element={< SectionUZ />} />
            <Route path="/Sectionnumber04" element={< Sectionnumber04 />} />
            <Route path="/Sectionnumber59" element={< Sectionnumber59 />} />

            {/* <Route path="/Quizz59" element={< Quizz59 />} />
            <Route path="/QuizzNums" element={< QuizzNums />} />
            <Route path="/QuizzAlphabet" element={< QuizzAlphabet />} />
            <Route path="/QuizzGlobal" element={< QuizzGlobal />} /> */}


            {/*Juegos relacionar*/}
            <Route path="/QuizzVocales" element={< QuizzVocales />} />
            <Route path="/QuizzAE" element={< QuizzAE />} />
            <Route path="/QuizzFJ" element={< QuizzFJ />} />
            <Route path="/QuizzKO" element={< QuizzKO />} />
            <Route path="/QuizzPT" element={< QuizzPT />} />
            <Route path="/QuizzUZ" element={< QuizzUZ />} />
            <Route path="/Quizz04" element={< Quizz04 />} />
            <Route path="/Quizz59" element={< Quizz59 />} />
            <Route path="/QuizzNums" element={< QuizzNums />} />
            <Route path="/QuizzAlphabet" element={< QuizzAlphabet />} />
            <Route path="/QuizzGlobal" element={< QuizzGlobal />} />

            {/*Seleccionar 1jug o 2jug*/}
            <Route path="/SelecGamNum" element={< SelecGamNum />} />
            <Route path="/SelecGam04" element={< SelecGam04 />} />
            <Route path="/SelecGam59" element={< SelecGam59 />} />
            <Route path="/SelecGamVocales" element={< SelecGamVocales />} />
            <Route path="/SelecGamAE" element={< SelecGamAE />} />
            <Route path="/SelecGamFJ" element={< SelecGamFJ />} />
            <Route path="/SelecGamKO" element={< SelecGamKO />} />
            <Route path="/SelecGamPT" element={< SelecGamPT />} />
            <Route path="/SelecGamUZ" element={< SelecGamUZ />} />
            <Route path="/SelecGamAlphabet" element={< SelecGamAlphabet />} />
            <Route path="/SelecGamGlobal" element={< SelecGamGlobal />} />
            {/*Seleccionar SIN AYUDA 1jug o 2jug*/}
            <Route path="/SelecGamNumSin" element={< SelecGamNumSin />} />
            <Route path="/SelecGam0Sin4" element={< SelecGam04Sin />} />
            <Route path="/SelecGam59Sin" element={< SelecGam59Sin />} />
            <Route path="/SelecGamVocalesSin" element={< SelecGamVocalesSin />} />
            <Route path="/SelecGamAESin" element={< SelecGamAESin />} />
            <Route path="/SelecGamFJSin" element={< SelecGamFJSin />} />
            <Route path="/SelecGamKOSin" element={< SelecGamKOSin />} />
            <Route path="/SelecGamPTSin" element={< SelecGamPTSin />} />
            <Route path="/SelecGamUZSin" element={< SelecGamUZSin />} />
            <Route path="/SelecGamAlphabetSin" element={< SelecGamAlphabetSin />} />
            <Route path="/SelecGamGlobalSin" element={< SelecGamGlobalSin />} />

            <Route path="/MemoryGameAE" element={< MemoryGameAE />} />
            <Route path="/MemoryGameFJ" element={< MemoryGameFJ />} />
            <Route path="/MemoryGameKO" element={< MemoryGameKO />} />
            <Route path="/MemoryGamePT" element={< MemoryGamePT />} />
            <Route path="/MemoryGameUZ" element={< MemoryGameUZ />} />
            <Route path="/MemoryGameVocales" element={< MemoryGameVocales />} />
            <Route path="/MemoryGamenum" element={< MemoryGamenum />} /> 
            <Route path="/MemoryGamenum69" element={< MemoryGamenum69 />} /> 
            <Route path="/MemoryGameglobal" element={< MemoryGameglobal />} /> 
            {/*NO FUNCIONA DE MOMENTO
             <Route path="/MemoryGamegloballetras" element={< MemoryGamegloballetras />} />  */}


            {/* Juego Cam 1j y 2j */}
            <Route path="/Cam_Num" element={< Cam_Num />} />
            <Route path="/Cam_Num_2J" element={< Cam_Num_2J />} />
            <Route path="/Cam_04" element={< Cam_04 />} />
            <Route path="/Cam_04_2J" element={< Cam_04_2J />} />
            <Route path="/Cam_59" element={< Cam_59 />} />
            <Route path="/Cam_59_2J" element={< Cam_59_2J />} />
            <Route path="/Cam_Glob" element={< Cam_Glob />} />
            <Route path="/Cam_Glob_2J" element={< Cam_Glob_2J />} />
            <Route path="/Cam_Alphabet" element={< Cam_Alphabet />} />
            <Route path="/Cam_Alphabet_2J" element={< Cam_Alphabet_2J />} />
            <Route path="/Cam_Vocales" element={< Cam_Vocales />} />
            <Route path="/Cam_Vocales_2J" element={< Cam_Vocales_2J />} />
            <Route path="/Cam_AE" element={< Cam_AE />} />
            <Route path="/Cam_AE_2J" element={< Cam_AE_2J />} />
            <Route path="/Cam_FJ" element={< Cam_FJ />} />
            <Route path="/Cam_FJ_2J" element={< Cam_FJ_2J />} />
            <Route path="/Cam_KO" element={< Cam_KO />} />
            <Route path="/Cam_KO_2J" element={< Cam_KO_2J />} />
            <Route path="/Cam_PT" element={< Cam_PT />} />
            <Route path="/Cam_PT_2J" element={< Cam_PT_2J />} />
            <Route path="/Cam_UZ" element={< Cam_UZ />} />
            <Route path="/Cam_UZ_2J" element={< Cam_UZ_2J />} />

            {/* Juego Cam 2J 1j y 2j SIN AYUDA*/}
            <Route path="/Cam_NumSin" element={< Cam_NumSin />} />
            <Route path="/Cam_NumSin_2J" element={< Cam_NumSin_2J />} />
            <Route path="/Cam_04Sin" element={< Cam_04Sin />} />
            <Route path="/Cam_04Sin_2J" element={< Cam_04Sin_2J />} />
            <Route path="/Cam_59Sin" element={< Cam_59Sin />} />
            <Route path="/Cam_59Sin_2J" element={< Cam_59Sin_2J />} />
            <Route path="/Cam_GlobSin" element={< Cam_GlobSin />} />
            <Route path="/Cam_GlobSin_2J" element={< Cam_GlobSin_2J />} />
            <Route path="/Cam_AlphabetSin" element={< Cam_AlphabetSin />} />
            <Route path="/Cam_AlphabetSin_2J" element={< Cam_AlphabetSin_2J />} />
            <Route path="/Cam_VocalesSin" element={< Cam_VocalesSin />} />
            <Route path="/Cam_VocalesSin_2J" element={< Cam_VocalesSin_2J />} />
            <Route path="/Cam_AESin" element={< Cam_AESin />} />
            <Route path="/Cam_AESin_2J" element={< Cam_AESin_2J />} />
            <Route path="/Cam_FJSin" element={< Cam_FJSin />} />
            <Route path="/Cam_FJSin_2J" element={< Cam_FJSin_2J />} />
            <Route path="/Cam_KOSin" element={< Cam_KOSin />} />
            <Route path="/Cam_KOSin_2J" element={< Cam_KOSin_2J />} />
            <Route path="/Cam_PTSin" element={< Cam_PTSin />} />
            <Route path="/Cam_PTSin_2J" element={< Cam_PTSin_2J />} />
            <Route path="/Cam_UZSin" element={< Cam_UZSin />} />
            <Route path="/Cam_UZSin_2J" element={< Cam_UZSin_2J />} />

          
          
          <Route path="/Sectionnumbers" element={<Sectionnumbers />} /> {/* Donde se ve Juego Num */}

          {/* <Route path='/Jugadores' element={<Jugadores />} />  */}
          <Route path='/PlayerSelector' element={<PlayerSelector />} /> {/* Donde se ve */}
          <Route path='/' element={<PlayerSelector />} /> {/* Donde se ve */}

          {isAuthenticated ? (
            <Route path='/Jugadores' element={<Jugadores />} /> 
          ) : (
            <Route path="/" element={<Main />} /> 
          )}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}



export default App;
