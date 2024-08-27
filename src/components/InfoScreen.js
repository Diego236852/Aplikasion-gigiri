import React, { useState } from 'react';
import PaginationDots from './PaginationDots';

function InfoScreen({ showLoginScreen }) {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id="info-screen">
      {currentPage === 1 && (
        <div className="content">
          <img src="image1.png" alt="¿Qué es DIGUI?" className="info-image" /> {/* Imagen de ejemplo */}
          <h2>¿Qué es DIGUI?</h2>
          <p>DIGUI es una app con juegos didácticos para niños pendejos XDXD.</p>
          <PaginationDots currentPage={currentPage} />
          <button className="next-button" onClick={nextPage}>→</button>

        </div>
      )}
      {currentPage === 2 && (
        <div className="content">
          <img src="image2.png" alt="Juegos Didácticos" className="info-image" />
          <h2>Juegos Didácticos</h2>
          <p>Ofrecemos una variedad de juegos diseñados para mejorar habilidades cognitivas y motoras.</p>
          <PaginationDots currentPage={currentPage} />
          <button className="next-button" onClick={nextPage}>→</button>

        </div>
      )}
      {currentPage === 3 && (
        <div className="content">
          <img src="image3.png" alt="Beneficios" className="info-image" />
          <h2>Beneficios</h2>
          <p>Los juegos de DIGUI ayudan a los niños a aprender de manera divertida y efectiva.</p>
          <PaginationDots currentPage={currentPage} />
          <button className="next-button" onClick={nextPage}>→</button>

        </div>
      )}
      {currentPage === 4 && (
        <div className="content">
          <img src="image4.png" alt="¡Únete a Nosotros!" className="info-image" />
          <h2>¡Únete a Nosotros!</h2>
          <p>Descarga la app y empieza a explorar los beneficios de DIGUI hoy mismo.</p>
          <PaginationDots currentPage={currentPage} />
          <button onClick={showLoginScreen} className="next-button">Ir a Inicio de Sesión</button>
        </div>
      )}
    </div>
  );
}

export default InfoScreen;
