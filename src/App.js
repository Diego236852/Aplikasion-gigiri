import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InfoScreen from './components/InfoScreen';
import LoginScreen from './components/LoginScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import ABCPiensa from './components/ABCPiensa'; 
import MenuScreen from './components/MenuScreen';
import SettingsScreen from './components/SettingsScreen';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  const [screen, setScreen] = useState('welcome');

  const navigate = (screen) => setScreen(screen);

  const getTitle = () => {
    switch (screen) {
      case 'menu':
        return 'Juegos';
      case 'settings':
        return 'Perfil';
      case 'abcpiensa':
        return 'ABC Piensa';
      default:
        return '';
    }
  };

  // Verificar si estamos en una pantalla después de iniciar sesión
  const shouldShowNavBars = (
    screen !== 'welcome' 
    && screen !== 'info' 
    && screen !== 'login' 
    && screen !== 'createAccount' 
    && screen !== 'abcpiensa'
  );

  return (
    <div className="App">
      {/* Mostrar TopBar solo después de iniciar sesión */}
      {shouldShowNavBars && <TopBar title={getTitle()} />}

      {/* Pantallas principales */}
      {screen === 'welcome' && <WelcomeScreen showInfoScreen={() => navigate('info')} />}
      {screen === 'info' && <InfoScreen showLoginScreen={() => navigate('login')} />}
      
      {screen === 'login' 
        && <LoginScreen 
          showCreateAccountScreen={() => navigate('createAccount')} 
          showMenuScreen={() => navigate('menu')} 
        />
      }
      
      {screen === 'createAccount' 
        && <CreateAccountScreen 
          showLoginScreen={() => navigate('login')} 
        />
      }
      
      {screen === 'menu' && <MenuScreen showABCPiensa={() => navigate('abcpiensa')} />}
      {screen === 'abcpiensa' && <ABCPiensa showMenuScreen={() => navigate('menu')} />}
      {screen === 'settings' && <SettingsScreen />}


      {/* Mostrar BottomNav solo después de iniciar sesión */}
      {shouldShowNavBars && <BottomNav currentScreen={screen} navigate={navigate} />}
    </div>
  );
}

export default App;
