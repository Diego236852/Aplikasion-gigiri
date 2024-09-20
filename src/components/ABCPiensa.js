import React, { useState } from 'react';
import '../App.css';

function ABCPiensa() {
  const letters = [
    ['E', 'T', 'S', 'C', 'J'],
    ['L', 'K', 'R', 'X', 'H'],
    ['Ñ', 'F', 'R', 'A', 'M'],
    ['W', 'Y', 'A', 'M', 'W'],
    ['D', 'O', 'U', 'I', 'Z'],
    ['V', 'I', 'N', 'Z', 'N']
  ];

  const initialWords = ['ESTO', 'LUZ', 'MAR', 'SOL', 'VIDA', 'CIERVO'];

  const [words, setWords] = useState(initialWords);
  const [selectedWord, setSelectedWord] = useState('');
  const [correctBoxes, setCorrectBoxes] = useState({}); // Para almacenar las palabras correctamente colocadas
  const [incorrectBoxes, setIncorrectBoxes] = useState(new Set()); // Para almacenar las cajas incorrectas

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleDrop = (event, letter, rowIndex, colIndex) => {
    event.preventDefault();
    const droppedWord = event.dataTransfer.getData('text');

    if (droppedWord[0] !== letter) {
      // Si la primera letra no es la correcta, marcar la caja como incorrecta
      setIncorrectBoxes(prev => new Set(prev).add(`${rowIndex}-${colIndex}`));
      setTimeout(() => setIncorrectBoxes(prev => {
        const newSet = new Set(prev);
        newSet.delete(`${rowIndex}-${colIndex}`);
        return newSet;
      }), 500); // Eliminar la clase después de la animación
      return;
    }

    // Colocar la palabra encima de la primera letra correcta
    setCorrectBoxes((prev) => ({
      ...prev,
      [`${rowIndex}-${colIndex}`]: droppedWord
    }));

    // Remover la palabra de la lista de palabras disponibles
    setWords(prevWords => prevWords.filter(word => word !== droppedWord));
  };

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData('text', word); // Ahora estamos arrastrando la palabra completa
  };

  // Verificar si el jugador ha ganado
  const hasWon = initialWords.every(word => {
    return Object.values(correctBoxes).includes(word);
  });

  return (
    <div className="abc-piensa-container">
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
                {/* Mostrar la palabra si ha sido colocada correctamente */}
                {correctBoxes[`${rowIndex}-${colIndex}`] ? (
                  <div className="card">{correctBoxes[`${rowIndex}-${colIndex}`]}</div>
                ) : (
                  letter
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="empty-boxes">
        {words.map((word, index) => (
          <div
            key={index}
            className={`empty-box ${selectedWord === word ? 'selected' : ''}`}
            onClick={() => handleWordClick(word)}
            draggable={!Object.values(correctBoxes).includes(word)} // Desactiva el drag si ya ha sido colocada
            onDragStart={(e) => handleDragStart(e, word)}
          >
            {word}
          </div>
        ))}
      </div>
      {hasWon && <div className="winner-message">¡Felicidades, has ganado!</div>}
    </div>
  );
}

export default ABCPiensa;
