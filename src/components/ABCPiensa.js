import React, { useState, useEffect } from 'react';
import '../App.css';

function ABCPiensa({ showMenuScreen }) {
  const letters = [
    ['A', 'B', 'C', 'D', 'E', 'Y'],
    ['F', 'G', 'H', 'I', 'J', 'Z'],
    ['K', 'L', 'M', 'N', 'Ñ'],
    ['O', 'P', 'Q', 'R', 'S'],
    ['T', 'U', 'V', 'W', 'X']
  ];

  // Lista de imágenes ordenadas alfabéticamente
  const initialImages = [
    { src: '/images/arbol.png', letter: 'A' },
    { src: '/images/billete.png', letter: 'B' },
    { src: '/images/casa.png', letter: 'C' },
    { src: '/images/dedo.png', letter: 'D' },
    { src: '/images/estrella.png', letter: 'E' },
    { src: '/images/flor.png', letter: 'F' },
    { src: '/images/galleta.png', letter: 'G' },
    { src: '/images/hoja.png', letter: 'H' },
    { src: '/images/iman.png', letter: 'I' },
    { src: '/images/jarron.png', letter: 'J' },
    { src: '/images/kilo.png', letter: 'K' },
    { src: '/images/luna.png', letter: 'L' },
    { src: '/images/mochila.png', letter: 'M' },
    { src: '/images/nube.png', letter: 'N' },
    { src: '/images/ñame.png', letter: 'Ñ' },
    { src: '/images/ojo.png', letter: 'O' },
    { src: '/images/pera.png', letter: 'P' },
    { src: '/images/queso.png', letter: 'Q' },
    { src: '/images/reloj.png', letter: 'R' },
    { src: '/images/sopa.png', letter: 'S' },
    { src: '/images/tuerca.png', letter: 'T' },
    { src: '/images/uva.png', letter: 'U' },
    { src: '/images/vaso.png', letter: 'V' },
    { src: '/images/wifi.png', letter: 'W' },
    { src: '/images/xilofono.png', letter: 'X' },
    { src: '/images/yoyo.png', letter: 'Y' },
    { src: '/images/zapato.png', letter: 'Z' }
  ];

  const [images, setImages] = useState(initialImages);
  const [correctBoxes, setCorrectBoxes] = useState({});
  const [incorrectBoxes, setIncorrectBoxes] = useState(new Set());
  const [hasWon, setHasWon] = useState(false);

  const handleDrop = (event, letter, rowIndex, colIndex) => {
    event.preventDefault();
    const droppedImageSrc = event.dataTransfer.getData('src');
    const droppedImageLetter = event.dataTransfer.getData('letter');

    if (droppedImageLetter !== letter) {
      setIncorrectBoxes(prev => new Set(prev).add(`${rowIndex}-${colIndex}`));
      setTimeout(() => setIncorrectBoxes(prev => {
        const newSet = new Set(prev);
        newSet.delete(`${rowIndex}-${colIndex}`);
        return newSet;
      }), 500);
      return;
    }

    setCorrectBoxes((prev) => ({
      ...prev,
      [`${rowIndex}-${colIndex}`]: droppedImageSrc
    }));

    setImages(prevImages => prevImages.filter(image => image.src !== droppedImageSrc));
  };

  const handleDragStart = (e, image) => {
    e.dataTransfer.setData('src', image.src);
    e.dataTransfer.setData('letter', image.letter);
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
                className={`letter-box ${incorrectBoxes.has(`${rowIndex}-${colIndex}`) ? 'incorrect-animation' : ''}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, letter, rowIndex, colIndex)}
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

      {/* Banco de imágenes como cartas apiladas */}
      <div className="image-bank">
        {images.map((image, index) => {
          const maxImagesPerRow = 9;
          const stackColumnIndex = index % maxImagesPerRow;
          const stackRowIndex = Math.floor(index / maxImagesPerRow);

          const style = {
            '--stack-index-x': stackColumnIndex, 
            '--stack-index-y': stackRowIndex  
          };

          return (
            <img
              key={index}
              src={image.src}
              alt={`Imagen ${index}`}
              className="image-card"
              style={style}
              draggable
              onDragStart={(e) => handleDragStart(e, image)}
            />
          );
        })}
      </div>

      {hasWon && (
        <div className="winner-message">
          <img src={process.env.PUBLIC_URL + '/images/trophy.png'} alt="Trophy" className="trophy-image" />
          <p className="winner-text">¡Eres un campeón, has ganado!</p>
        </div>
      )}
    </div>
  );
}

export default ABCPiensa;
