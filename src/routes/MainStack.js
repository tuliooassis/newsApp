
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import News from '../screens/News';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="science" 
          options={{
            tabBarLabel: 'Ciência e Tecnologia',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'md-heart'} size={size} color={color} />
            ),
          }}
          component={News}
        />
        <Tab.Screen
          name="world"
          options={{
            tabBarLabel: 'Mundo',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'md-globe'} size={size} color={color} />
            ),
          }}
          component={News}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
