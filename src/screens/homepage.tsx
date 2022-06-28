import React, {Component, useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import contact from './src/sreens/contact';
import login from './src/screens/login';
import register from './src/screens/register';
import Navigator from './src/routes/home';
import Tabs from '../navigation/tabs';

const homepage = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
export default homepage;
