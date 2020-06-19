
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import News from '../screens/News';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Ciência e Tecnologia" component={News} />
        <Tab.Screen name="Mundo" component={News} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
