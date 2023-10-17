import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../styles/Jugadores.css';
import adbtn from '../assets/addboton.png';

  const Jugadores  = () => {
    const { user, isAuthenticated } = useAuth0(); 
    const [player,setPlayer] = useState([]);
    const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
    
    const coloresFondo = ['fondo-uno', 'fondo-dos', 'fondo-tres'];

    const cambiarFondo = () => {
      // Cambia el índice de color al siguiente color de la lista
      setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % coloresFondo.length);
    };
    
    
    useEffect(() => {
      if (isAuthenticated && user) {
      // Realiza una solicitud al backend para obtener la lista de jugadores
      const auth0Id = user.sub;
      axios
        .get(`http://localhost:5000/MostrarJugadors/${auth0Id}`)
        .then((response) => {
          setPlayer(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error al obtener la lista de jugadores:', error);
        });
      }
    }, [user, isAuthenticated]);
    const bodyJugadoresClass = `bodyJugadores ${coloresFondo[backgroundColorIndex]}`;
    

    return (

      // <div className="{bodyJugadores}">
      <div className={bodyJugadoresClass}>
        <div className=''></div>
      <ul className='ulJugadores'>
        {Array.isArray(player.jugadorId) && player.jugadorId.length > 0 ? (
          player.jugadorId.map((jugador, index) => (
            <Link to="/Officialpage"><li key={index}>

              <img className='imgJugadores' src={jugador.imagen} alt='' onMouseEnter={cambiarFondo} ></img>
              <p className='Njugadores'>{jugador.username}</p>
            </li></Link>
          ))
        ) : (
          <p></p>
        )}
      </ul>
        <div className='divCrearJugador'>
          <Link to="/PlayerSelector">
            <button className='btnCrearJugador'><img src={adbtn}></img></button>
            <p className='Njugadores'>Añadir jugador</p>
            {/* <p>jugador</p> */}
          </Link>
        </div>  
      </div>
        
    );
  };

export default Jugadores;
