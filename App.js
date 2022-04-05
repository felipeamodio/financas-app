// importar gesture handlers
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}