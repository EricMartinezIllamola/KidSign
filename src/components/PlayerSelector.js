import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "../styles/players.css"; 

import axios from "axios";



function PlayerSelector() {
    const { user, isAuthenticated } = useAuth0();
    const [name, setName] = useState("");
    const [selectedImage, setSelectedImage] = useState(''); // Inicialmente selecciona la primera imagen
    const navigate = useNavigate();
    const [degrees, setDegrees] = useState(0);

    const prev = () => {
        const prevIndex = (degrees / 36 - 1 + 10) % 10;
        setSelectedImage(`./avatar/${prevIndex}.jpg`);
        setDegrees(degrees + 36);
    }

    const next = () => {
        const prevIndex = (degrees / 36 - 1 + 10) % 10;
        setSelectedImage(`./avatar/${prevIndex}.jpg`);
        setDegrees(degrees - 36);
    }
    

    const continuar = async (e) => {
            e.preventDefault();
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/CrearJugador", {
                nombre : name,
                imagen: selectedImage,
                userId: user.sub,
            });
    
            if (response.status === 200) {
                // Si la creación del jugador fue exitosa, redirige a la página deseada
                navigate('/Jugadores');
            }
            console.log(response.avatar)
        } catch (error) {
            // Maneja los errores de la solicitud
            console.error("Error al enviar datos al backend:", error);
        }
    };
    

    return (
        <div>
        {isAuthenticated ? (
        <div className="body">
            <div className="containerPlayer">
                <div className="btns2">
                    <div className="player">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <button onClick={continuar} className="continuar">Continuar</button>
                </div>
                <div className="box" style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}>
                    
                    <span onClick={() => setSelectedImage("/avatar/1.jpg")}><img src={"/avatar/1.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/2.jpg")}><img src={"avatar/2.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/3.jpg")}><img src={"avatar/3.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/4.jpg")}><img src={"avatar/4.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/5.jpg")}><img src={"avatar/5.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/6.jpg")}><img src={"avatar/6.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/7.jpg")}><img src={"avatar/7.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/8.jpg")}><img src={"avatar/8.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/9.jpg")}><img src={"avatar/9.jpg"}></img></span>
                    <span onClick={() => setSelectedImage("/avatar/10.jpg")}><img src={"avatar/10.jpg"}></img></span>
                </div>
                <div className="btns">
                    <div className="btn prev" onClick={() => { prev() }}></div>
                    <div className="btn next" onClick={() => { next() }}></div>
                </div>
            </div>
            
        </div>
        ) : (
            <p>Debes iniciar sesión para crear un jugador.</p>
        )}
        </div>
    )
}


export default PlayerSelector;


// function PlayerSelector() {
//     const { user, isAuthenticated } = useAuth0();
//     const [name, setName] = useState("");
//     const [selectedImage, setSelectedImage] = useState(''); // Inicialmente selecciona la primera imagen
//     const navigate = useNavigate();
//     const [degrees, setDegrees] = useState(0);

//     const prev = () => {
//         const prevIndex = (degrees / 36 - 1 + 10) % 10;
//         setSelectedImage(`./avatar/${prevIndex}.jpg`);
//         setDegrees(degrees + 36);
//     }

//     const next = () => {
//         const prevIndex = (degrees / 36 - 1 + 10) % 10;
//         setSelectedImage(`./avatar/${prevIndex}.jpg`);
//         setDegrees(degrees - 36);
//     }
    

//     const continuar = async (e) => {
//             e.preventDefault();
//         if (!isAuthenticated) {
//             navigate('/login');
//             return;
//           }

//         try {
//             const response = await axios.post("http://localhost:5000/CrearJugador", {
//                 nombre : name,
//                 imagen: selectedImage,
//                 userId: user.sub,
//             });
    
//             if (response.status === 200) {
//                 // Si la creación del jugador fue exitosa, redirige a la página deseada
//                 navigate('/Games');
//               }
//               console.log(response.avatar)
//         } catch (error) {
//             // Maneja los errores de la solicitud
//             console.error("Error al enviar datos al backend:", error);
//         }
//     };
    

//     return (
//         <div>
//         {isAuthenticated ? (
//         <div className="body">
//             <div className="containerPlayer">
//                 {/* <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageUpload}
//                         /> */}

//                 <div className="btns2">
//                     <div className="player">
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}/>
//                     </div>
//                     <button onClick={continuar} className="continuar">Continuar</button>
//                 </div>
//                 <div className="box" style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}>
//                     <span onClick={() => setSelectedImage("./avatar/1.jpg")}><img src={require("./avatar/1.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/2.jpg")}><img src={require("./avatar/2.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/3.jpg")}><img src={require("./avatar/3.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/4.jpg")}><img src={require("./avatar/4.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/5.jpg")}><img src={require("./avatar/5.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/6.jpg")}><img src={require("./avatar/6.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/7.jpg")}><img src={require("./avatar/7.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/8.jpg")}><img src={require("./avatar/8.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/9.jpg")}><img src={require("./avatar/9.jpg")}></img></span>
//                     <span onClick={() => setSelectedImage("./avatar/10.jpg")}><img src={require("./avatar/10.jpg")}></img></span>
//                 </div>
//                 <div className="btns">
//                     <div className="btn prev" onClick={() => { prev() }}></div>
//                     <div className="btn next" onClick={() => { next() }}></div>
//                 </div>
//             </div>
            
//         </div>
//         ) : (
//             <p>Debes iniciar sesión para crear un jugador.</p>
//           )}
//           </div>
//     )
// }


// export default PlayerSelector;