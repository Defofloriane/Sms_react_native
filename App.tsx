import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import contact from './src/sreens/contact';
import register from './src/screens/register';
import Navigator from './src/routes/home';

import login from './src/screens/login';
// import Tabs from '../navigation/tabs';
//ajpout router
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/login" component={login} />
  //       <Route exact path="/Tabs" component={Tabs} />
  //     </Switch>
  //   </Router>
  // );
  return <Navigator />;
};
export default App;
