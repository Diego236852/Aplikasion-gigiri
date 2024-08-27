import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InfoScreen from './components/InfoScreen';
import LoginScreen from './components/LoginScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState('welcome');

  const showInfoScreen = () => setScreen('info');
  const showLoginScreen = () => setScreen('login');
  const showCreateAccountScreen = () => setScreen('createAccount');

  return (
    <div className="App">
      {screen === 'welcome' && <WelcomeScreen showInfoScreen={showInfoScreen} />}
      {screen === 'info' && <InfoScreen showLoginScreen={showLoginScreen} />}
      {screen === 'login' && <LoginScreen showCreateAccountScreen={showCreateAccountScreen} />}
      {screen === 'createAccount' && <CreateAccountScreen showLoginScreen={showLoginScreen} />}
    </div>
  );
}

export default App;
