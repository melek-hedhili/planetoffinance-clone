import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
import RectangleView from './RectangleView';
import normalize from 'react-native-normalize';
const {width, height} = Dimensions.get('window');

const Search = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: normalize(30),
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <TextInput
        activeUnderlineColor="white"
        underlineColor="white"
        placeholder="Professional, country, asset under manag..."
        style={{
          width: normalize(250),
          height: normalize(40),
          borderRadius: normalize(10),
          borderTopLeftRadius: normalize(10),
          borderTopRightRadius: normalize(10),
          marginHorizontal: normalize(10),
          fontSize: normalize(11),
          marginTop: normalize(10),
        }}
        left={<TextInput.Icon icon="magnify" size={normalize(21)} />}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <RectangleView bgcolor={'#003ba4'} icon={'menu'} borderRadius={5} />
        </TouchableOpacity>
        <TouchableOpacity>
          <RectangleView
            bgcolor={'#003ba4'}
            icon={'return-up-back'}
            borderRadius={5}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
