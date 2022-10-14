import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import UnderHeader from '../components/UnderHeader';
import Search from '../components/Search';
import ContactsCard from '../components/ContactsCard';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <UnderHeader />
      <ScrollView>
        <Search />
        <ContactsCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
