import React from 'react';
import { Text } from 'react-native';

const News = ({ route }) => {
  console.log(route.name);
  return (
    <Text>navigation</Text>
  )
}

export default News;