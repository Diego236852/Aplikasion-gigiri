import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InfoScreen from './components/InfoScreen';
import LoginScreen from './components/LoginScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState('welcome');

  const showInfoScreen = () => setScreen('info');
  const showLoginScreen = () => setScreen('login');

  return (
    <div className="App">
      {screen === 'welcome' && <WelcomeScreen showInfoScreen={showInfoScreen} />}
      {screen === 'info' && <InfoScreen showLoginScreen={showLoginScreen} />}
      {screen === 'login' && <LoginScreen />}
    </div>
  );
}

export default App;
