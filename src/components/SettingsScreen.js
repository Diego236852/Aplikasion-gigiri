import React from 'react';
import '../App.css';

function SettingsScreen() {
  return (
    <div className="settings-screen">
      <div className="settings-header">
        <h1 className="settings-title">Perfil</h1>
      </div>

      <div className="profile-section">
        <div className="profile-picture"></div>
        <h2 className="profile-name">Nombre de Usuario</h2>
      </div>

      <div className="settings-options">
        <div className="settings-option">
          <p className="option-title">Tipo de cuenta</p>
          <span className="arrow">&rarr;</span>
        </div>
        <div className="settings-option">
          <p className="option-title">Nombre</p>
          <span className="arrow">&rarr;</span>
        </div>
        <div className="settings-option">
          <p className="option-title">Apellido(s)</p>
          <p className="option-subtitle">Sólo para docentes y padres de familia</p>
          <span className="arrow">&rarr;</span>
        </div>
        <div className="settings-option">
          <p className="option-title">Nombre de Usuario</p>
          <span className="arrow">&rarr;</span>
        </div>
        <div className="settings-option">
          <p className="option-title">Número de teléfono</p>
          <span className="arrow">&rarr;</span>
        </div>
      </div>
    </div>
  );
}

export default SettingsScreen;
