import React from 'react';
import homeIcon from '../assets/home-icon.png';
import educationIcon from '../assets/education-icon.png';
import gamesIcon from '../assets/games-icon.png';
import notificationsIcon from '../assets/notifications-icon.png';
import settingsIcon from '../assets/settings-icon.png';

function BottomNav({ currentScreen, navigate }) {
  return (
    <div className="bottom-nav">
      <button 
        className={`nav-button ${currentScreen === 'home' ? 'active' : ''}`} 
        onClick={() => navigate('home')}
      >
        <img src={homeIcon} alt="Inicio" className="nav-icon" />
        <span>Inicio</span>
      </button>
      
      <button 
        className={`nav-button ${currentScreen === 'education' ? 'active' : ''}`} 
        onClick={() => navigate('education')}
      >
        <img src={educationIcon} alt="Educación" className="nav-icon" />
        <span>Educación</span>
      </button>
      
      <button 
        className={`nav-button ${currentScreen === 'menu' ? 'active' : ''}`} 
        onClick={() => navigate('menu')}
      >
        <img src={gamesIcon} alt="Juegos" className="nav-icon" />
        <span>Juegos</span>
      </button>
      
      <button 
        className={`nav-button ${currentScreen === 'notifications' ? 'active' : ''}`} 
        onClick={() => navigate('notifications')}
      >
        <img src={notificationsIcon} alt="Notificaciones" className="nav-icon" />
        <span>Notificaciones</span>
      </button>
      
      <button 
        className={`nav-button ${currentScreen === 'settings' ? 'active' : ''}`} 
        onClick={() => navigate('settings')}
      >
        <img src={settingsIcon} alt="Ajustes" className="nav-icon" />
        <span>Ajustes</span>
      </button>
    </div>
  );
}

export default BottomNav;
