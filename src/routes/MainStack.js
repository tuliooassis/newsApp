
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
          activeTintColor: '#000',
          inactiveTintColor: '#b3b3b3',
        }}
      >
        <Tab.Screen
          name="science" 
          options={{
            tabBarLabel: 'Ciência e Tecnologia',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'md-hardware-chip-outline'} size={size} color={color} />
            ),
          }}
          component={News}
        />
        <Tab.Screen
          name="world"
          options={{
            tabBarLabel: 'Mundo',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'md-globe-outline'} size={size} color={color} />
            ),
          }}
          component={News}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
