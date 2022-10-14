import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import normalize from 'react-native-normalize';
const Tab = createBottomTabNavigator();
const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            paddingBottom: normalize(-10),
            fontSize: normalize(15),
            marginBottom: normalize(15),
            marginTop: normalize(-10),
          },
          tabBarStyle: {height: normalize(70)},
          tabBarInactiveBackgroundColor: '#081c4c',
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: '#b4bcca',
          tabBarActiveBackgroundColor: '#303c44',
          headerShown: false,
        }}
        initialRouteName={HomeScreen}>
        <Tab.Screen
          name={'Professionals'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="group" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'Private Investors'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="shield-account-variant"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Club deals'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="crown" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
