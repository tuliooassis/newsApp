
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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Ciência e Tecnologia') {
              iconName = 'md-heart';
            } else if (route.name === 'Mundo') {
              iconName = 'md-globe';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Ciência e Tecnologia" component={News} />
        <Tab.Screen name="Mundo" component={News} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
