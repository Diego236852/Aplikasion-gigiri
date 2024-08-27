import React, { useState } from 'react';

function CreateAccountScreen() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div id="create-account-screen">
      <div className="back-button">
        <button className="back-arrow">←</button>
      </div>
      <input type="text" placeholder="Nombres" className="input-field" />
      <input type="text" placeholder="Apellidos" className="input-field" />
      <input type="email" placeholder="Correo Electrónico" className="input-field" />
      <input type="text" placeholder="Nombre de Usuario" className="input-field" />
      <input type="password" placeholder="Contraseña" className="input-field" />
      <input type="password" placeholder="Verificar Contraseña" className="input-field" />
      <div className="terms-container">
        <input
          type="checkbox"
          id="terms-checkbox"
          checked={acceptedTerms}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms-checkbox">
          Acepto los <a href="#">términos y condiciones</a>
        </label>
      </div>
      <button className="create-account-button" disabled={!acceptedTerms}>→</button>
    </div>
  );
}

export default CreateAccountScreen;
