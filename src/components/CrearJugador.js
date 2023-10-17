import Login from './Login'
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { image } from '@tensorflow/tfjs';

// import elefanteImage from '../assets/avatar/elefante2.png';
// let arrayImg{

// }

const CrearJugador = () => {
  const { user, isAuthenticated } = useAuth0();
  const [nombreJugador, setNombreJugador,] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  // ../assets/avatar/elefante2.png

  const navigate = useNavigate(); 

  const handleNombreChange = (e) => { //actualizar info nombre
    setNombreJugador(e.target.value);
  };

  const handleImagenPerfilChange = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    try { // Enviar info al backen (del jugador)
      const response = await axios.post('http://localhost:5000/CrearJugador', {
        nombre: nombreJugador,
        userId: user.sub,
        imagen: selectedImage,
      });

      if (response.status === 200) {
        // Si la creación del jugador fue exitosa, redirige a la página deseada
        navigate('/Games');
      }
    } catch (error) {
      console.error('Error al crear el jugador:', error);
      // Manejo de errores, si es necesario
    }
  };

  return (
    <div>
      <Login/>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div>
          <img
                src={require('../assets/avatar/elefante2.png')}
                alt="Elefante"
                onClick={() => handleImagenPerfilChange('../assets/avatar/elefante2.png')}
              />
          <img
                src={require('../assets/avatar/erizo.jpg')}
                alt="Erizo"
                onClick={() => handleImagenPerfilChange('../assets/avatar/erizo.jpg')}
              />

          {/* <img src= {require(selectedImage)} alt="Previsualización de la imagen" id="image-preview" /> */}

          {/* {imagenPreview && (
            <img className="imagen-perfil" src={imagenPreview} alt="Vista previa de la imagen de perfil" />
          )} */}
        </div>
          <div>

            <input
              type="text"
              placeholder='Nombre del Jugador'
              id="nombre"
              name="nombre"
              value={nombreJugador}
              onChange={handleNombreChange}
            />
          </div>
          <button type="submit">Crear Jugador</button>
        </form>
      ) : (
        <p>Debes iniciar sesión para crear un jugador.</p>
      )}
    </div>
  );
};

export default CrearJugador;
