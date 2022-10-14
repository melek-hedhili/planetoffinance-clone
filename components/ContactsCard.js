import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {data} from '../data/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
import normalize from 'react-native-normalize';
const ContactsCard = () => {
  return (
    <FlatList
      style={styles.container}
      enableEmptySections={true}
      data={data}
      keyExtractor={item => {
        return item.id;
      }}
      renderItem={({item}) => {
        return (
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.box}>
              <Image style={styles.image} source={{uri: item.image}} />

              <View style={styles.info}>
                <Text style={styles.name}>{item.fullname}</Text>
                <View style={{marginTop: normalize(10)}}>
                  <Text style={styles.description}>{item.job}</Text>
                  <Text style={styles.description}>{item.working_at}</Text>
                  <Text style={styles.description}>
                    {'Experience: ' + item.experience}
                  </Text>
                  <Text style={styles.description}>
                    {'Languages: ' + item.language}
                  </Text>
                </View>

                <View style={styles.iconContainer}>
                  <Ionicons name="mail" size={20} color={'#ffffff'} />
                  <Entypo name="message" size={20} color={'#ffffff'} />
                  <Ionicons name="call" size={20} color={'#ffffff'} />
                  <Ionicons name="videocam" size={20} color={'#ffffff'} />
                </View>

                <View
                  style={[styles.iconContainer, {marginTop: normalize(20)}]}>
                  <View
                    style={{
                      backgroundColor: '#f8c32c',
                      width: '100%',
                      height: '100%',
                      borderRadius: normalize(7),
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#302932',
                        fontWeight: 'bold',
                      }}>
                      CHECK PROFILE
                    </Text>
                  </View>
                </View>
                <Image
                  source={{uri: item.nationality}}
                  style={{
                    width: normalize(25),
                    height: normalize(25),
                    borderRadius: normalize(25),
                    position: 'absolute',
                    bottom: normalize(5),
                    borderWidth: 2,
                    borderColor: 'white',
                    marginHorizontal: normalize(-100),
                  }}
                />
                <Image
                  source={require('../assets/images/shield.png')}
                  style={{
                    width: normalize(25),
                    height: normalize(25),
                    borderRadius: normalize(25),
                    position: 'absolute',
                    top: normalize(5),
                    marginHorizontal: normalize(-100),
                    zIndex: 999,
                  }}
                />
                <View
                  style={{
                    width: normalize(57),

                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    height: normalize(18),
                    borderRadius: normalize(25),
                    position: 'absolute',
                    top: normalize(8),
                    left: normalize(20),
                    marginHorizontal: normalize(-115),
                    backgroundColor: '#b3886c',
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      top: normalize(5),
                      left: normalize(20),
                      fontSize: normalize(10),
                      textAlign: 'center',
                      zIndex: 999,
                      color: '#303955',
                      fontWeight: 'bold',
                    }}>
                    BRONZE
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ContactsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: normalize(50),
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  box: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#f5cf1c',

    width: '95%',
    height: normalize(180),
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  info: {
    alignSelf: 'flex-start',
    height: '100%',
    width: '70%',
    backgroundColor: '#051f4d',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  name: {
    fontSize: normalize(20),
    color: '#166cc3',
    marginHorizontal: 5,
  },
  description: {
    color: '#ffffff',
    marginHorizontal: 5,
    fontSize: normalize(12),
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    marginTop: normalize(10),
    alignSelf: 'center',
  },
  iconContainer: {
    marginTop: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: normalize(20),
  },
  iconFonts: {
    color: 'gray',
  },
});
