import React from 'react';
import '../App.css';

function MenuScreen({ showABCPiensa }) {
  return (
    <div className="menu-screen">
      <div className="game-grid">
        <div className="game-card" onClick={showABCPiensa}>
          <div className="game-image"></div>
          <p className="game-title">A B C Piensa!</p>
        </div>
        <div className="game-card">
          <div className="game-image"></div>
          <p className="game-title">Dominó</p>
        </div>
        <div className="game-card">
          <div className="game-image"></div>
          <p className="game-title">Lanza y Diviértete con las Letras</p>
        </div>
        <div className="game-card">
          <div className="game-image"></div>
          <p className="game-title">Ruleta de la Suerte</p>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
