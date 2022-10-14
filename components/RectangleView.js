import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
const RectangleView = ({number, bgcolor, borderRadius, icon}) => {
  return (
    <View
      style={{
        width: normalize(40),
        height: normalize(40),
        borderRadius: borderRadius,
        backgroundColor: bgcolor,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: normalize(10),
        zIndex: 1,
      }}>
      {number ? (
        <>
          <Text
            style={{
              color: 'white',
              fontSize: normalize(22),
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            {number}
          </Text>
        </>
      ) : (
        <>
          <Ionicons
            name={icon}
            size={normalize(23)}
            color={'white'}
            style={{alignSelf: 'center'}}
          />
        </>
      )}
    </View>
  );
};

export default RectangleView;

const styles = StyleSheet.create({});
