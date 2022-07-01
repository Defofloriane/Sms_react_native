import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import tab1 from '../screens/tab1';
import tab2 from '../screens/tab2';
import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';
import contact from '../screens/contact';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import message from '../screens/messages';
import Parametre from '../screens/param';
import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabss = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'SMS') {
            iconName = focused ? 'message' : 'message';
          } else if (route.name === 'Wifi') {
            iconName = focused ? 'wifi' : 'wifi';
          } else if (route.name === 'Bluetooth') {
            iconName = focused ? 'bluetooth' : 'bluetooth';
          } else if (route.name === 'Parametre') {
            iconName = focused ? 'settings' : 'settings';
          }

          // You can return any component that you like here!
          return (
            <Icon
              type="MaterialIcons"
              style={{color: 'black'}}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#009387',
        tabBarInactiveTintColor: 'gray',
      })}>
      {/* <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Chats" component={ChatStack} />
      <Tab.Screen name="Contacts" component={ContactStack} /> */}
      <Tab.Screen name="SMS" component={contact} />
      <Tab.Screen name="Wifi" component={tab1} />
      <Tab.Screen name="Bluetooth" component={tab2} />
      <Tab.Screen name="Parametre" component={Parametre} />
    </Tab.Navigator>
    // <Tab.Navigator tabBarOptions={{showMessage: false}}>
    //   <Tab.Screen name="SMS" component={contact} />
    //   <Tab.Screen name="Wifi" component={tab1} />
    //   <Tab.Screen name="Bluetooth" component={tab2} />
    //   <Tab.Screen name="Parametre" component={parametre} />
    // </Tab.Navigator>
  );
};

const sytle = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5dF0',
    shadowOffset: {
      width: 0,
      heigth: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabss;
