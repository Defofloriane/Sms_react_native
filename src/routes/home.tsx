import {View, Text} from 'react-native';
import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import contact from '../screens/contact';
import login from '../screens/login';
import message from '../screens/messages';
import register from '../screens/register';
import homepage from '../screens/homepage';
import HederPage from './header';
import Smsheader from './smsheader';
const home = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={login} title="login" hideNavBar />
        <Scene
          key="register"
          component={register}
          title="register"
          hideNavBar
        />
        <Scene key="homepage" component={homepage} navBar={Smsheader} />
        <Scene key="message" component={message} navBar={HederPage} />
      </Stack>
    </Router>
  );
};

export default home;

// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import contact from '../screens/contact';
// import login from '../screens/login';
// import message from '../screens/messages';
// import register from '../screens/register';
// import homepage from '../screens/homepage';
// const sreens = {
//   login: {
//     screen: login,
//   },
//   register: {
//     screen: register,
//   },
//   homepage: {
//     screen: homepage,
//   },
//   contact: {
//     screen: contact,
//   },
//   message: {
//     screen: message,
//   },
// };

// const home = createStackNavigator(sreens);

// export default createAppContainer(home);
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import contact from '../screens/contact';
// import login from '../screens/login';
// import message from '../screens/message';
// import register from '../screens/register';
// import homepage from '../screens/homepage';
// const sreens = {
//   login: {
//     screen: login,
//   },
//   message: {
//     screen: message,
//   },
//   contact: {
//     screen: contact,
//   },

//   register: {
//     screen: register,
//   },
//   homepage: {
//     screen: homepage,
//   },
// };

// const home = createStackNavigator(sreens);

// export default createAppContainer(home);
