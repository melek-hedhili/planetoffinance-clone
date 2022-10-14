import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RectangleView from './RectangleView';
import normalize from 'react-native-normalize';
const UnderHeader = () => {
  return (
    <View style={{height: normalize(70), backgroundColor: 'fff'}}>
      <Text style={styles.text}>Total assets managed by members</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <RectangleView
          number={5}
          bgcolor={'#f5cf1c'}
          borderRadius={normalize(15)}
        />
        <RectangleView
          number={2}
          bgcolor={'#f5cf1c'}
          borderRadius={normalize(15)}
        />
        <RectangleView
          number={6}
          bgcolor={'#f5cf1c'}
          borderRadius={normalize(15)}
        />
        <Text style={styles.text}>Billion $</Text>
      </View>
    </View>
  );
};

export default UnderHeader;

const styles = StyleSheet.create({
  text: {
    color: '#081c4c',
    textAlign: 'center',
    fontSize: normalize(23),
    fontWeight: '800',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
