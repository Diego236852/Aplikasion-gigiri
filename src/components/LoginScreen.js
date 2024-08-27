import React from 'react';

function LoginScreen({ showCreateAccountScreen }) {
  return (
    <div id="login-screen">
      <div className="login-container">
        <img src="logo.png" alt="DiGui" className="logo" />
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />
        <button className="login-button">Iniciar Sesión</button>
        <a href="#" className="forgot-password">¿Olvidaste la contraseña?</a>
        <button className="create-account-button" onClick={showCreateAccountScreen}>
          Crear Cuenta
        </button>
        <p className="or-text">O iniciar sesión con</p>
        <button className="google-login-button">
          <img src="google-logo.png" alt="Google" className="google-logo" />
          Google
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
