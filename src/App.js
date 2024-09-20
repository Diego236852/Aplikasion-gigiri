import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InfoScreen from './components/InfoScreen';
import LoginScreen from './components/LoginScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import ABCPiensa from './components/ABCPiensa'; // Importa ABCPiensa
import './App.css';

function App() {
  const [screen, setScreen] = useState('welcome');

  const showInfoScreen = () => setScreen('info');
  const showLoginScreen = () => setScreen('login');
  const showCreateAccountScreen = () => setScreen('createAccount');
  const showABCPiensa = () => setScreen('abcpiensa'); 

  return (
    <div className="App">
      {screen === 'welcome' && <WelcomeScreen showInfoScreen={showInfoScreen} />}
      {screen === 'info' && <InfoScreen showLoginScreen={showLoginScreen} />}
      {screen === 'login' && <LoginScreen showCreateAccountScreen={showCreateAccountScreen} showABCPiensa={showABCPiensa} />}
      {screen === 'createAccount' && <CreateAccountScreen showLoginScreen={showLoginScreen} />}
      {screen === 'abcpiensa' && <ABCPiensa showLoginScreen={showLoginScreen} />} {/* Pasa showLoginScreen */}
    </div>
  );
}

export default App;
