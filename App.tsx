/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import contact from './src/sreens/contact';
import login from './src/screens/login';
import register from './src/screens/register';
import Navigator from './src/routes/home';

function App() {
  return <Navigator />;
}
export default App;
