import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View, PermissionsAndroid} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import contact from './src/sreens/contact';
import register from './src/screens/register';
import Navigator from './src/routes/home';

import login from './src/screens/login';
import {NativeBaseProvider, Text, Box} from 'native-base';
// import SmsRetriever from 'react-native-sms-retriever';
// import SmsListener from 'react-native-android-sms-listener';
// import Tabs from '../navigation/tabs';
//ajpout router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// async function requestReadSmsPermission() {
//   try {
//     await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS, {
//       title: '(...)',
//       message: "Why you're asking for...",
//     });
//   } catch (err) {}
// }

const App = () => {
  // const _onSmsListenerPressed = async () => {
  //   try {
  //     const phoneNumber = await SmsRetriever.requestPhoneNumber();
  //     console.log(phoneNumber);
  //   } catch (error) {
  //     console.log('11111111111111------', JSON.stringify(error));
  //   }

  //   try {
  //     const registered = await SmsRetriever.startSmsRetriever();

  //     if (registered) {
  //       SmsRetriever.addSmsListener(event => {
  //         console.log('--------', event);
  //         // SmsRetriever.removeSmsListener();
  //       });
  //     }
  //   } catch (error) {
  //     console.log('22222222222222------', JSON.stringify(error));
  //   }
  // };

  // useEffect(() => {
  //   _onSmsListenerPressed();
  //   // requestReadSmsPermission();
  //   // SmsListener.addListener(message => {
  //   //   console.log('qqqqqqqq', message);
  //   // });
  // }, []);
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/login" component={login} />
  //       <Route exact path="/Tabs" component={Tabs} />
  //     </Switch>
  //   </Router>
  // );
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
};
export default App;
