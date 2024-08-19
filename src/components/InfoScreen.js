import React, { useState } from 'react';
import './InfoScreen.css';
import PaginationDots from './PaginationDots'; // css o js???
import NavigationButton from './NavigationButton'; // css o js???

const InfoScreen = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const showLogin = () => {
        // TODO: Aquí iría la lógica para mostrar la pantalla de inicio de sesión
    };

    return (
        <div id="info-screen">
            <div className={`content ${currentPage === 1 ? '' : 'hidden'}`} id="page-1">
                <h2>¿Qué es DIGUI?</h2>
                <p>DIGUI es una app con juegos didácticos para niños con retraso.</p>
                <NavigationButton onClick={nextPage} text="Siguiente" />
            </div>
            <div className={`content ${currentPage === 2 ? '' : 'hidden'}`} id="page-2">
                <h2>Juegos Didácticos</h2>
                <p>Ofrecemos una variedad de juegos diseñados para mejorar habilidades cognitivas y motoras.</p>
                <NavigationButton onClick={nextPage} text="Siguiente" />
            </div>
            <div className={`content ${currentPage === 3 ? '' : 'hidden'}`} id="page-3">
                <h2>Beneficios</h2>
                <p>Los juegos de DIGUI ayudan a los niños a aprender de manera divertida y efectiva.</p>
                <NavigationButton onClick={nextPage} text="Siguiente" />
            </div>
            <div className={`content ${currentPage === 4 ? '' : 'hidden'}`} id="page-4">
                <h2>¡Únete a Nosotros!</h2>
                <p>Descarga la app y empieza a explorar los beneficios de DIGUI hoy mismo.</p>
                <NavigationButton onClick={showLogin} text="Ir a Inicio de Sesión" />
            </div>
            <PaginationDots currentPage={currentPage} />
        </div>
    );
};

export default InfoScreen;
