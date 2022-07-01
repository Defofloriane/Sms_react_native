import {View, Text, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import React from 'react';

export default function smsheader() {
  return (
    <Header
      //   leftComponent={() => (
      //     <TouchableOpacity onPress={() => Actions.pop()}>
      //       <Icon name="arrow-back" style={{color: '#fff'}} />
      //     </TouchableOpacity>
      //   )}
      centerComponent={{text: 'Your SMS App', style: {color: '#fff'}}}
      containerStyle={{
        backgroundColor: '#009387',
      }}
      //   rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
}
