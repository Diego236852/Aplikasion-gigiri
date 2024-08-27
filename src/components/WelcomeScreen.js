import React, { useEffect } from 'react';

function WelcomeScreen({ showInfoScreen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      showInfoScreen();
    }, 3000); // Espera 3 segundos antes de cambiar a la siguiente pantalla

    return () => clearTimeout(timer);
  }, [showInfoScreen]);

  return (
    <div id="welcome-screen">
      <h1 className="welcome-text">Bienvenido</h1>
      <div className="circle"></div> {/* Añadimos un círculo */}
      <h1 className="digui-title">DIGUI</h1>
      <div className="smile">
        <svg height="200" width="500">
          {/* Texto curvado */}
          <path id="curve" d="M 150 130 Q 250 190 350 130" fill="transparent" />
          <text>
            <textPath href="#curve" startOffset="50%" textAnchor="middle" fontFamily="Quicksand" fill="#C71585" fontSize="20px">
              Creciendo Juntos
            </textPath>
          </text>
          {/* Línea curva negra */}
          <path d="M 150 145 Q 250 205 350 145" stroke="black" strokeWidth="5" fill="transparent" />
        </svg>
      </div>
    </div>
  );
}

export default WelcomeScreen;
