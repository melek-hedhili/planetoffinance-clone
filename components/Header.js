import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import normalize from 'react-native-normalize';
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#081c4c',
        height: normalize(75),
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: normalize(150),
            height: normalize(40),
            resizeMode: 'contain',
            alignSelf: 'flex-start',
            marginTop: normalize(20),
            marginHorizontal: normalize(10),
          }}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Entypo
            name="menu"
            color={'white'}
            size={28}
            style={{marginTop: normalize(22), marginHorizontal: normalize(10)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
