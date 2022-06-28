import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import tab1 from '../screens/tab1';
import tab2 from '../screens/tab2';
import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';
import contact from '../screens/contact';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import message from '../screens/messages';

const Tab = createBottomTabNavigator();

const Tabss = () => {
  return (
    <Tab.Navigator tabBarOptions={{showMessage: false}}>
      <Tab.Screen name="SMS" component={contact} />
      <Tab.Screen name="SMS Wifi" component={tab1} />
      <Tab.Screen name="SMS Bluethooth" component={tab2} />
    </Tab.Navigator>
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
