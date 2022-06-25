import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import contact from '../screens/contact';
import login from '../screens/login';
import message from '../screens/messages';
const sreens = {
  contact: {
    screen: contact,
  },
  login: {
    screen: login,
  },
  message: {
    screen: message,
  },
};

const home = createStackNavigator(sreens);

export default createAppContainer(home);
