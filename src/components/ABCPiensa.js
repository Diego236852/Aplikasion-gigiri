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

  const words = ['ESTO', 'LUZ', 'MAR', 'SOL', 'VIDA', 'CIERVO'];

  const [selectedWord, setSelectedWord] = useState('');
  const [correctBoxes, setCorrectBoxes] = useState({}); // Para almacenar las cartas correctamente colocadas
  const [incorrectBoxes, setIncorrectBoxes] = useState(new Set()); // Para almacenar las cajas incorrectas

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleDrop = (event, letter) => {
    event.preventDefault();
    const droppedLetter = event.dataTransfer.getData('text');
    if (droppedLetter !== letter) {
      // Si la letra no es la correcta, actualizar el estado para marcar la caja como incorrecta
      setIncorrectBoxes(prev => new Set(prev).add(letter));
      setTimeout(() => setIncorrectBoxes(prev => {
        const newSet = new Set(prev);
        newSet.delete(letter);
        return newSet;
      }), 500); // Eliminar la clase después de la animación
      return;
    }
    // Actualizar el estado para colocar la carta encima de la letra correcta
    setCorrectBoxes((prev) => ({ ...prev, [letter]: droppedLetter }));
  };

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData('text', word[0]);
  };

  // Verificar si el jugador ha ganado
  const hasWon = words.every(word => {
    const letter = word[0];
    return Object.values(correctBoxes).includes(letter);
  });

  return (
    <div className="abc-piensa-container">
      <div className="letter-grid">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={`letter-box ${incorrectBoxes.has(letter) ? 'incorrect-animation' : ''}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, letter)}
              >
                {/* Mostrar la carta si ha sido colocada correctamente */}
                {correctBoxes[letter] ? (
                  <div className="card">{correctBoxes[letter]}</div>
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
            draggable
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
