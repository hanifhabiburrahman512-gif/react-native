import React from 'react';
import {LogBox} from 'react-native';
import Navigation from './src/navigations';

// Suppress React Navigation ref warning (known issue with react-navigation v7)
LogBox.ignoreLogs(['Function components cannot be given refs']);

const App = () => {
  return <Navigation />;
};

export default App;
