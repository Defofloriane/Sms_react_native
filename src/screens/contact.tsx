import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Contacts from 'react-native-contacts';
import {Actions} from 'react-native-router-flux';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'contact1',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'contact2',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const contact = ({navigation}) => {
  const [contact, setContact] = useState([]);
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
  });

  useEffect(() => {
    console.log('useeffect call');
    Contacts.checkPermission().then(permission => {
      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
      if (permission === 'undefined') {
        Contacts.requestPermission().then(permission => {
          // console.log('permission: ', permission);
          // ...
        });
      }
      if (permission === 'authorized') {
        // yay!
        getContacts();
        // console.log('permission authorized: ', permission);
      }
      if (permission === 'denied') {
        // x.x
        // console.log('permission denied: ', permission);
        alert("vous n'avez pas acces a l'application");
      }
    });
  }, []);

  const getContacts = async () => {
    let contactsArr = [];
    const result = await Contacts.getAll();
    result.sort((a, b) => {
      if (a.displayName < b.displayName) {
        return -1;
      }
      if (a.displayName > b.displayName) {
        return 1;
      }
      return 0;
    });
    // console.log('Contact used data: ', result);
    result.forEach(item => {
      contactsArr = [
        ...contactsArr,
        {
          contactId: item.rawContactId,
          displayName: item.displayName,
          image: item.thumbnailPath,
          familyName: item.familyName,
          phoneNumber: item.phoneNumbers[0]?.number,
        },
      ];
    });
    setContact(contactsArr);
    // setSecondData(contactsArr);
  };

  // function filterData(array, value) {
  //   const filtered = array.filter(contact => {
  //     if (contact?.displayName !== null) {
  //       return contact?.displayName
  //         ?.toString()
  //         .toLowerCase()
  //         .includes(value.toLowerCase());
  //     }
  //   });
  // setData(filtered);
  // }

  const Item = ({itemContact}) => (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate('message', {contact: itemContact});
        Actions.message({contact: itemContact});
      }}
      style={styles.item}>
      <Image
        source={
          itemContact.image == ''
            ? require('../images/profil.jpg')
            : {uri: itemContact.image}
        }
        resizeMode={'contain'}
        style={{height: 60, width: 60, borderRadius: 30}}
      />
      <View style={{marginLeft: 20}}>
        <Text style={styles.title}>{itemContact.displayName}</Text>
        <Text style={styles.title}>{itemContact.phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item itemContact={item} key={item.id} />;
  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={contact}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  textStyle: {},

  title: {
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
export default contact;
