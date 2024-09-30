import React, { useState, useEffect } from 'react';
import '../App.css';

/*Al parecer, esta es la manera "correcta" de incluir imagenes locales en react
No me parece bonito, ni elegante, pero es como funciona...*/ 
import arbol from "../assets/images/ABCPiensa/arbol.png";
import billete from "../assets/images/ABCPiensa/billete.png";
import casa from "../assets/images/ABCPiensa/casa.png";
import dedo from "../assets/images/ABCPiensa/dedo.png";
import estrella from "../assets/images/ABCPiensa/estrella.png";
import flor from "../assets/images/ABCPiensa/flor.png";
import galleta from "../assets/images/ABCPiensa/galleta.png";
import hoja from "../assets/images/ABCPiensa/hoja.png";
import iman from "../assets/images/ABCPiensa/iman.png";
import jarron from "../assets/images/ABCPiensa/jarron.png";
import kilo from "../assets/images/ABCPiensa/kilo.png";
import luna from "../assets/images/ABCPiensa/luna.png";
import mochila from "../assets/images/ABCPiensa/mochila.png";
import nube from "../assets/images/ABCPiensa/nube.png";
import ñame from "../assets/images/ABCPiensa/ñame.png";
import ojo from "../assets/images/ABCPiensa/ojo.png";
import pera from "../assets/images/ABCPiensa/pera.png";
import queso from "../assets/images/ABCPiensa/queso.png";
import reloj from "../assets/images/ABCPiensa/reloj.png";
import sopa from "../assets/images/ABCPiensa/sopa.png";
import tuerca from "../assets/images/ABCPiensa/tuerca.png";
import uva from "../assets/images/ABCPiensa/uva.png";
import vaso from "../assets/images/ABCPiensa/vaso.png";
import wifi from "../assets/images/ABCPiensa/wifi.png";
import xilofono from "../assets/images/ABCPiensa/xilofono.png";
import yoyo from "../assets/images/ABCPiensa/yoyo.png";
import zapato from "../assets/images/ABCPiensa/zapato.png";

function ABCPiensa({ showMenuScreen }) {
  const letras = ['A', 'B', 'C', 'D', 'E', 'Y', 'F', 'G', 'H', 'I', 'J', 'Z', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X']

  let i;

  const fila1 = [];
  for (let i = 0; i < 6; i++){
    const letra = letras[Math.floor(Math.random() * letras.length)];
    fila1.push(letra);
    const letraIndex = letras.indexOf(letra);
    letras.splice(letraIndex, 1);
  }

  const fila2 = [];
  for (let i = 0; i < 6; i++){
    const letra = letras[Math.floor(Math.random() * letras.length)];
    fila2.push(letra);
    const letraIndex = letras.indexOf(letra);
    letras.splice(letraIndex, 1);
  }

  const fila3 = [];
  for (let i = 0; i < 5; i++){
    const letra = letras[Math.floor(Math.random() * letras.length)];
    fila3.push(letra);
    const letraIndex = letras.indexOf(letra);
    letras.splice(letraIndex, 1);
  }
  
  const fila4 = [];
  for (let i = 0; i < 5; i++){
    const letra = letras[Math.floor(Math.random() * letras.length)];
    fila4.push(letra);
    const letraIndex = letras.indexOf(letra);
    letras.splice(letraIndex, 1);
  }

  const fila5 = [];
  for (let i = 0; i < 5; i++){
    const letra = letras[Math.floor(Math.random() * letras.length)];
    fila5.push(letra);
    const letraIndex = letras.indexOf(letra);
    letras.splice(letraIndex, 1);
  }
  
  const letters = [
    fila1,
    fila2,
    fila3,
    fila4,
    fila5
  ];

  // Lista de imágenes ordenadas alfabéticamente
  const initialImages = [
    { src: arbol, letter: 'A' },
    { src: billete, letter: 'B' },
    { src: casa, letter: 'C' },
    { src: dedo, letter: 'D' },
    { src: estrella, letter: 'E' },
    { src: flor, letter: 'F' },
    { src: galleta, letter: 'G' },
    { src: hoja, letter: 'H' },
    { src: iman, letter: 'I' },
    { src: jarron, letter: 'J' },
    { src: kilo, letter: 'K' },
    { src: luna, letter: 'L' },
    { src: mochila, letter: 'M' },
    { src: nube, letter: 'N' },
    { src: ñame, letter: 'Ñ' },
    { src: ojo, letter: 'O' },
    { src: pera, letter: 'P' },
    { src: queso, letter: 'Q' },
    { src: reloj, letter: 'R' },
    { src: sopa, letter: 'S' },
    { src: tuerca, letter: 'T' },
    { src: uva, letter: 'U' },
    { src: vaso, letter: 'V' },
    { src: wifi, letter: 'W' },
    { src: xilofono, letter: 'X' },
    { src: yoyo, letter: 'Y' },
    { src: zapato, letter: 'Z' }
  ];

  const [images, setImages] = useState(initialImages);
  const [correctBoxes, setCorrectBoxes] = useState({});
  const [incorrectBoxes, setIncorrectBoxes] = useState(new Set());
  const [hasWon, setHasWon] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  // Función para manejar el clic en una imagen
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Función para manejar el clic en una letra
  const handleLetterClick = (letter, rowIndex, colIndex) => {
    if (selectedImage) {
      if (selectedImage.letter === letter) {
        setCorrectBoxes((prev) => ({
          ...prev,
          [`${rowIndex}-${colIndex}`]: selectedImage.src
        }));
        
        setImages((prevImages) => prevImages.filter(img => img.src !== selectedImage.src));
        setSelectedImage(null); // Desseleccionar la imagen después de colocarla
        
      } else {
        setIncorrectBoxes(prev => new Set(prev).add(`${rowIndex}-${colIndex}`));
        
        setTimeout(() => setIncorrectBoxes(prev => {
          const newSet = new Set(prev);
          newSet.delete(`${rowIndex}-${colIndex}`);
          return newSet;
        }), 500);
        
      }
    }
  };

  useEffect(() => {
    if (Object.keys(correctBoxes).length === initialImages.length) {
      setHasWon(true);
      const audio = new Audio(process.env.PUBLIC_URL + '/sounds/celebration-sound.mp3');
      audio.play();
    }
  }, [correctBoxes]);

  return (
    <div className="abc-piensa-container">
      <button className="back-arrow" onClick={showMenuScreen}>←</button>

      <div className="letter-grid">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={
                  `letter-box ${incorrectBoxes.has(`${rowIndex}-${colIndex}`)
                  ? 'incorrect-animation' 
                  : ''
                  }`
                }
                onClick={() => handleLetterClick(letter, rowIndex, colIndex)} // Usar clic en lugar de arrastrar
              >
                {correctBoxes[`${rowIndex}-${colIndex}`] ? (
                  <img src={correctBoxes[`${rowIndex}-${colIndex}`]} alt={letter} className="card" />
                ) : (
                  letter
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="image-bank">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Imagen ${index}`}
            className={`image-card ${selectedImage === image ? 'selected' : ''}`} // Añadir clase si está seleccionada
            onClick={() => handleImageClick(image)} // Seleccionar con un clic
          />
        ))}
      </div>

      {hasWon && (
        <div className="winner-message">
          <img 
            src={process.env.PUBLIC_URL + '/images/trophy.png'} 
            alt="Trophy" 
            className="trophy-image" 
          />
          
          <p className="winner-text">¡Eres un campeón, has ganado!</p>
        </div>
      )}
    </div>
  );
}

export default ABCPiensa;