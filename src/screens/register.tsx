import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import Realm from 'realm';
import User from './user';
import {Icon} from 'react-native-elements';

const register = ({navigation}) => {
  //   const [name, setName] = useState([]);

  // const addName = ()=>{
  //     let array = name.slice();
  //     // array.push(id : new Realm.BSON.ObjectID(),text : val);
  //     setName(array);
  //     console.log(val);

  // }
  //register user
  const [data, setData] = React.useState({
    username: '',
    password: '',
    phonenumber: '',
    // phonenumber: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [state, setstate] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  const Users2 = {
    name: 'Register',
    properties: {
      _phonenumber: 'string',
      Name: 'string',
      Password: 'string',
    },
    primaryKey: '_phonenumber',
  };

  const saveUser = (state: string, name: string, password: string) => {
    (async () => {
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [Users2],
      });

      // task1 = realm.create('Register', new User(4, 'floriane'));
      let task1;
      realm.write(() => {
        task1 = realm.create('Register', {
          _phonenumber: state,
          Name: name,
          // phone: data.phonenumber,
          Password: password,
        });
      });

      // // let task1, task2;
      // realm.write(() => {
      //   task1 = realm.create('Task', {
      //     _id: 1,
      //     name: 'go grocery shopping',
      //     status: 'Open',
      //   }
      //   task2 = realm.create('Task', {
      //     _id: 2,
      //     name: 'go exercise',
      //     status: 'Open',
      //   });
      //   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
      // });
      const tasks = realm.objects('Register');
      console.log(`The lists of tasks are: ${JSON.stringify(tasks)}`);
    })();
    // navigation.navigate('login');
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      phonenumber: val,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            {/* <FontAwesome name="user" color="#05375a" size={20} />
             */}
            <Icon name="person" size={30} style={{color: 'black'}} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              //  onChangeText={val => addName()}
              // onChangeText={val => textInputChange(val)}
              onChangeText={name => setname(name)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Phone Number
          </Text>
          <View style={styles.action}>
            {/* <Feather name="lock" color="#05375a" size={20} /> */}
            <Icon
              name="local-phone"
              type="MaterialIcons"
              size={20}
              style={{color: 'black'}}
            />
            <TextInput
              value={state}
              placeholder="Your Number"
              // secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={val => handleConfirmPasswordChange(val)}
              onChangeText={text => setstate(text)}
            />
            {/* <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity> */}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            {/* <Feather name="lock" color="#05375a" size={20} /> */}
            <Icon
              name="lock"
              type="MaterialIcons"
              size={20}
              style={{color: 'black'}}
            />
            <TextInput
              placeholder="enter  Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={val => handleConfirmPasswordChange(val)}
              onChangeText={text => setpassword(text)}
            />
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={
                // saveUser(state, name, password)
                console.log('gggcgc')
              }>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#009387',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
