import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View, PermissionsAndroid} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import contact from './src/sreens/contact';
import register from './src/screens/register';
import Navigator from './src/routes/home';

import login from './src/screens/login';
import {NativeBaseProvider, Text, Box} from 'native-base';
import SmsListener from 'react-native-android-sms-listener';

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
  // SmsListener.addListener(message => {
  //   console.info(message);
  // });

  // async function requestReadSmsPermission() {
  //   try {
  //     await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_SMS,
  //       {
  //         title: 'request',
  //         message: "Why you're asking for...",
  //       },
  //     );
  //   } catch (err) {}
  // }

  // const recuMessage = () => {
  //   let subscription = SmsListener.addListener(message => {
  //     let verificationCodeRegex = /Your verification code: ([\d]{6})/;

  //     if (verificationCodeRegex.test(message.body)) {
  //       let verificationCode = message.body.match(verificationCodeRegex)[1];

  //       YourPhoneVerificationApi.verifyPhoneNumber(
  //         message.originatingAddress,
  //         verificationCode,
  //       ).then(verifiedSuccessfully => {
  //         if (verifiedSuccessfully) {
  //           subscription.remove();
  //           return;
  //         }

  //         if (__DEV__) {
  //           console.info(
  //             'Failed to verify phone `%s` using code `%s`',
  //             message.originatingAddress,
  //             verificationCode,
  //           );
  //         }
  //       });
  //     }
  //   });
  // };

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
  // // );
  // const [messages, setMessages] = useState([]);

  // const getRecuMessages = async () => {
  //   SmsListener.addListener(message => {
  //     console.log('fgggggg');

  //     setMessages([
  //       ...messages,
  //       {
  //         id: allMessage.length + 1,
  //         titre: messageRecu.body,
  //         userId: -1,
  //       },
  //     ]);
  //   });
  // };
  // useEffect(() => {
  //   getRecuMessages();
  // }, []);

  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
};
export default App;
