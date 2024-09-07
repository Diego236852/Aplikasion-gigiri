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

  // Palabras que corresponden a las letras en el grid
  const words = ['ESTO', 'LUZ', 'MAR', 'SOL', 'VIDA', 'CIERVO'];

  const [selectedWord, setSelectedWord] = useState('');

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  return (
    <div className="abc-piensa-container">
      <div className="letter-grid">
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((letter, colIndex) => (
              <div key={colIndex} className="letter-box">
                {letter}
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
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ABCPiensa;
