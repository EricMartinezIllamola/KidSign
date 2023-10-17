import React from 'react'
import '../styles/Officialpage.css';
import star from '../assets/iconosOfficial/star.png';
import party from '../assets/iconosOfficial/party.png';
import abcicon from '../assets/iconosOfficial/abcicon.png';
import numerosicon from '../assets/iconosOfficial/numerosicon.png';
import mujer from '../assets/iconosOfficial/mujer.png';
import casa from '../assets/iconosOfficial/casa.png';
import tablero from '../assets/iconosOfficial/tablero.png'
import gamess from '../assets/iconosOfficial/gamess.png';
import Memory from '../assets/iconosOfficial/Memory.png';
import { Link } from 'react-router-dom';

// Revisar que esta todas la rutas y mirar que coincide con el app routes
const Officialpage = () => {
  return (
    <div className='Main-container'>
      <div className='Sidebar'>
        <ul className="sidecss menu bg-base-100 h-full .w-70 rounded-box fixed ">
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' >
            <Link to='/'>
            <img src={casa} alt="casa" id='casa'/>
          HOME
            </Link>
          </li>
          {/* <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link>
            <img width="28" height="28" src={games} alt="launch-box"/>
            GAMES
            </Link>
          </li> */}
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <Link to='/Jugadores'>
              <img src={mujer} alt='' id='mujer' />
              PROFILE
            </Link>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' href='#abecedario-ae'>
            <a href='#vocales'>
              <img src={tablero} alt='' id='tablero' />
              VOCALES
            </a>
          </li>

          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' href='#abecedario-ae'>
            <a href='#abecedario-ae'>
              {/* <img src={abcicon} alt='' id='abcicon' /> */}
              ABECEDARIO A-E
            </a>
          </li>

          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-fj'>
              {/* <img src={abcicon} alt='' id='abcicon' /> */}
              ABECEDARIO F-J
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-ko'>
              {/* <img src={abcicon} alt='' id='abcicon' /> */}
              ABECEDARIO K-O
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-pt'>
              {/* <img src={abcicon} alt='' id='abcicon' /> */}
              ABECEDARIO P-T
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#abecedario-uz'>
              {/* <img src={abcicon} alt='' id='abcicon' /> */}
              ABECEDARIO U-Z
            </a>
          </li>   
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' href='#abecedario-ae'>
            <a href='#abecedario-global'>
              <img src={abcicon} alt='' id='abcicon' />
              ABECEDARIO
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' href='#abecedario-ae'>
            <a href='#losnumeros04'>
              LOS NÚMEROS 0-4
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box' href='#abecedario-ae'>
            <a href='#losnumeros59'>
              LOS NÚMEROS 5-9
            </a>
          </li>         
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#numero-global'>
              <img src={numerosicon} alt='' id='numerosicon' />
              LOS NUMEROS
            </a>
          </li>
          <li className='hover:bg-orange-600 active:bg-orange-700 rounded-box'>
            <a href='#global'>
              <img src={gamess} alt='' id='gamess' />
              GLOBALES
            </a>
          </li>

        </ul>
      </div>
      <div className='Main-Sections-Container'>
        <div className='section-vocals' id='vocales'> <strong>Lección 1: LAS VOCALES </strong> </div>
        <div className='vocals-path'>

          <ul className='btnlist'>
            <li>
              <Link to='/Section1'>
                <button className='btn1' type='image'> <img src={star} alt='' id='star' /></button>
              </Link>
            </li>

            <li> 
              <Link to='/SelecGamVocales'> 
              <button className='btn2'><img src={tablero} alt='' id='tablero' /></button> 
              </Link>
            </li>

            <li>
              <Link to='/QuizzVocales'> 
              <button className='btn4'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox' /> </button>
              </Link>
            </li>

            <li>
              <Link to='/MemoryGameVocales'> 
              <button className='btn5'> <img src={Memory} alt='' id='Memory' /> </button>
              </Link>
            </li>

            <li> 
              <Link to='/SelecGamVocalesSin'>
              <button className='btn6'><img src={party} alt='' id='party' /> </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className='section-letters' id='abecedario-ae'><strong>Lección 2| 2.1: EL ABECEDARIO A-E</strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li>
              <Link to='/SectionAE'>
                <button className='btnA'> <img src={star} alt='' id='star' /> </button>
              </Link>
            </li>
            <li>
              <Link to='/SelecGamAE'>
                <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' /> </button>
              </Link>
            </li>
            <li>
              <Link to='/QuizzAE'>
                <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox' /></button> </Link></li>
            <li>
              <Link to='/MemoryGameAE'>
                <button className='btnA4'><img src={Memory} alt='' id='Memory' /></button>
              </Link>
            </li>
            <li>
              <Link to='/SelecGamAE'>
                <button className='btnA5'><img src={party} alt='' id='party' /></button>
              </Link>
            </li>
          </ul>
        </div>

        <div className='section-letters' id='abecedario-fj'><strong>Lección 2.2: EL ABECEDARIO F-J  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='/SectionFJ'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> 
              <Link to='/SelecGamFJ'> <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> </Link></li>
            <li> 
              <Link to='/QuizzFJ'> <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link></li>
            <li> 
              <Link to='/MemoryGameFJ'> <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> </Link></li>
            <li> 
              <Link to='/SelecGamFJ'> <button className='btnA5'><img src={party} alt='' id='party'/></button> </Link></li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-ko'><strong>Lección 2.3: EL ABECEDARIO K-O  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='/SectionKO'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> 
              <Link to='/SelecGamKO'> <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> </Link></li>
            <li> 
              <Link to='/QuizzKO'> <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link></li>
            <li> 
              <Link to='/MemoryGameKO'> <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> </Link></li>
            <li> 
              <Link to='/SelecGamKOSin'> <button className='btnA5'><img src={party} alt='' id='party'/></button> </Link></li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-pt'><strong>Lección 2.4: EL ABECEDARIO P-T  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='/SectionPT'> <button className='btnA'> <img src={star} alt='' id='star' /> </button></Link></li>
            <li> 
              <Link to='/SelecGamPT'> <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> </Link></li>
          
            <li> 
              <Link to='/QuizzPT'> <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link></li>
            <li> 
              <Link to='/MemoryGamePT'> <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> </Link></li>
            <li> 
              <Link to='/SelecGamPTSin'> <button className='btnA5'><img src={party} alt='' id='party'/></button> </Link></li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-uz'><strong>Lección 2.5: EL ABECEDARIO U-Z  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
              <Link to='/SectionUZ'> 
              <button className='btnA'> <img src={star} alt='' id='star' /> </button>
              </Link>
              </li>
            <li> 
              <Link to='/SelecGamUZ'> 
              <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> 
              </Link>
              </li>
            <li> 
              <Link to='/QuizzUZ'>
                 <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> 
                 </Link>
                 </li>
            <li> 
              <Link to='/MemoryGameUZ'> 
              <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> 
              </Link>
              </li>
            <li> 
              <Link to='/SelecGamUZSin'> 
              <button className='btnA5'><img src={party} alt='' id='party'/></button> 
              </Link>
              </li>
          </ul>
        </div>
        <div className='section-letters' id='abecedario-global'><strong>Lección 2.6: EL ABECEDARIO GLOBAL  </strong> </div>
        <div className='vocals-path'>
          <ul className='btnlist'>
              <Link to='/SelecGamAlphabet'> 
              <button className='btnA1'> <img src={abcicon} alt='' id='abcicon' />  </button> 
              </Link>
            <li> 
              <Link to='/QuizzAlphabet'>
                <button className='btnA3'><img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> 
                </Link>
                </li>
            {/* <li>
              <Link to='/MemoryGamegloballetras'> 
              <button className='btnA4'><img src={Memory} alt='' id='Memory'/></button> 
              </Link>
              </li>  */}
            <li> 
              <Link to='/SelecGamAlphabet'> 
              <button className='btnA5'><img src={party} alt='' id='party'/></button> 
              </Link>
              </li>
          </ul>
        </div>
        
        <div className='section-number'id='losnumeros04'> <strong>Lección 3| LOS NÚMEROS 0-4</strong></div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
            <Link to='/Sectionnumber04'> <button className='btn01'> <img src={star} alt='' id='star' /> </button> </Link>
              </li>
            <li> 
            <Link to='/SelecGam04'><button className='btn11'> <img src={numerosicon} alt='' id='numerosicon' /> </button></Link>
              </li>
            <li> 
            <Link to='/Quizz04'><button className='btn33'> <img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/>  </button></Link>
            </li>
            <li> 
            <Link to='/MemoryGamenum'><button className='btn44'> <img src={Memory} alt='' id='Memory'/> </button></Link>
              </li>
            <li> 
            <Link to='/SelecGam04Sin'><button className='btn55'> <img src={party} alt='' id='party'/>  </button></Link>
              </li>
          </ul>
        </div>
        <div className='section-number'id='losnumeros59'> <strong>Lección 3| 3.2 LOS NÚMEROS 5-9</strong></div>
        <div className='vocals-path'>
          <ul className='btnlist'>
            <li> 
            <Link to='/Sectionnumber59'> <button className='btn01'> <img src={star} alt='' id='star' /> </button> </Link>
              </li>
            <li> 
            <Link to='/SelecGam59'><button className='btn11'> <img src={numerosicon} alt='' id='numerosicon' /> </button> </Link>
              </li>
            <li> 
            <Link to='/Quizz59'><button className='btn33'> <img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/></button> </Link>
            </li>
            <li> 
            <Link to='/MemoryGamenum69'><button className='btn44'> <img src={Memory} alt='' id='Memory'/> </button></Link>
              </li>
            <li> 
            <Link to='/SelecGam59Sin'><button className='btn55'> <img src={party} alt='' id='party'/>  </button></Link>
              </li>
          </ul>
        </div>
        <div className='section-number'id='numero-global'> <strong>Lección 3| LOS NÚMEROS GLOBALES </strong></div>
        <div className='vocals-path'>
          <ul className='btnlist'>
              <Link to='/SelecGamNum'><button className='btn11'> <img src={numerosicon} alt='' id='numerosicon' /> </button></Link>
            <li> 
              <Link to='/QuizzNums'><button className='btn33'> <img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/>  </button></Link>
            </li>
            <li> 
              <Link to='/MemoryGameglobal'><button className='btn44'> <img src={Memory} alt='' id='Memory'/> </button></Link>
              </li> 
            <li> 
              <Link to='/SelecGamNumSin'><button className='btn55'> <img src={party} alt='' id='party'/>  </button></Link>
              </li>
          </ul>
        </div>
        <div className='section-global'id='global'> <strong>Lección 4 | GLOBALES </strong></div>
        <div className='vocals-path'>
          <ul className='btnlist'>
              <Link to='/SelecGamGlobal'><button className='btnG0'> <img src={numerosicon} alt='' id='numerosicon' /> </button></Link>
            <li> 
              <Link to='/QuizzGlobal'><button className='btnG2'> <img src='https://img.icons8.com/color/48/launch-box.png' alt='' id='launchbox'/>  </button></Link></li>
            {/* <li> NO MEMORI GLOBAL
              <Link to='/'><button className='btnG3'> <img src={Memory} alt='' id='Memory'/> </button></Link>
              </li> */}
            <li> 
              <Link to='/SelecGamGlobalSin'><button className='btnG4'> <img src={party} alt='' id='party'/>  </button></Link>
              </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Officialpage;

// Mirar este link
// https://blog.avada.io/css/3d-buttons