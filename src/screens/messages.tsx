import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SmsAndroid from 'react-native-get-sms-android';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titre: 'contact1',
    userId: '1oo',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titre: 'contact2',
    userId: '12o',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titre: 'Third Item',
    userId: -1,
  },
];

const messages = ({navigation}) => {
  const [message, setMessage] = useState('');
  const contact = navigation.getParam('contact');
  const [allMessage, setAllMessage] = useState([]);
  console.log('====================================');
  console.log(contact);
  console.log('====================================');
  const sendMess = () => {
    SmsAndroid.autoSend(
      contact.phoneNumber,
      message,
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      success => {
        console.log('SMS sent successfully');
        setMessage('');
        setAllMessage([
          {
            id: allMessage.length + 1,
            titre: message,
            userId: -1,
          },
          ...allMessage,
        ]);
      },
    );
  };
  const Item = ({showMessage}) => (
    <TouchableOpacity onPress={() => {}} style={{width: '100%', marginTop: 5}}>
      <View
        style={{
          flex: 1,
          alignItem: 'center',
          width: '100%',
        }}>
        <Text
          style={
            (styles.titre,
            {
              borderRadius: 10,
              padding: 5,
              alignSelf: showMessage.userId == -1 ? 'flex-end' : 'flex-start',
              backgroundColor: showMessage.userId == -1 ? 'grey' : 'green',
            })
          }>
          {showMessage.titre}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item showMessage={item} key={item.id} />;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <FlatList
          data={allMessage}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          paddingBottom: 20,
        }}>
        <TextInput
          onChangeText={val => {
            setMessage(val);
          }}
          type="text"
          placeholder="saisir votre message!"
          value={message}
          style={{
            width: '75%',
            backgroundColor: 'gray',
            borderRadius: 40,
            textAlign: 'center',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            sendMess();
          }}
          style={{
            backgroundColor: 'cyan',
            borderRadius: 5,
            alignItem: 'center',
            marginBotoom: 23,
            width: 70,
            heigth: 5,
          }}>
          <Text style={{textAlign: 'center', marginTop: 15}}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  textStyle: {},

  titre: {
    // fontWeigth: 'bold',
    fontSize: 20,
  },
  item: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    flex: 1,
    // marginTop: 10,
    paddingHorizontal: 5,
    padding: 8,
    // marginVertical: 8,
    marginHorizontal: 8,
  },
});
