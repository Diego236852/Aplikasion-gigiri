import React, { useState, useEffect } from 'react';
import '../App.css';

function ABCPiensa({ showMenuScreen }) {
  const letters = [
    ['E', 'T', 'S', 'C', 'J', 'V'],
    ['L', 'K', 'R', 'X', 'H', 'I'],
    ['Ñ', 'F', 'R', 'A', 'M', 'N'],
    ['W', 'Y', 'A', 'M', 'W', 'Z'],
    ['D', 'O', 'U', 'I', 'Z', 'N']
  ];  

  const initialWords = ['ESTO', 'LUZ', 'MAR', 'SOL', 'VIDA', 'CIERVO'];

  const [words, setWords] = useState(initialWords);
  const [selectedWord, setSelectedWord] = useState('');
  const [correctBoxes, setCorrectBoxes] = useState({});
  const [incorrectBoxes, setIncorrectBoxes] = useState(new Set());
  const [hasWon, setHasWon] = useState(false);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleDrop = (event, letter, rowIndex, colIndex) => {
    event.preventDefault();
    const droppedWord = event.dataTransfer.getData('text');

    if (droppedWord[0] !== letter) {
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
      [`${rowIndex}-${colIndex}`]: droppedWord
    }));

    setWords(prevWords => prevWords.filter(word => word !== droppedWord));
  };

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData('text', word);
  };

  useEffect(() => {
    if (Object.keys(correctBoxes).length === initialWords.length) {
      setHasWon(true);
      const audio = new Audio(process.env.PUBLIC_URL + '/sounds/celebration-sound.mp3');
      audio.play();
    }
  }, [correctBoxes]);

  return (
    <div className="abc-piensa-container">
      <button className="back-arrow" onClick={showMenuScreen}>←</button>

      {/* Cuadrícula de letras */}
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
                  <div className="card">{correctBoxes[`${rowIndex}-${colIndex}`]}</div>
                ) : (
                  letter
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Casillas amarillas */}
      <div className="empty-boxes">
        {words.map((word, index) => (
          <div
            key={index}
            className={`empty-box ${selectedWord === word ? 'selected' : ''}`}
            onClick={() => handleWordClick(word)}
            draggable={!Object.values(correctBoxes).includes(word)}
            onDragStart={(e) => handleDragStart(e, word)}
          >
            {word}
          </div>
        ))}
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
