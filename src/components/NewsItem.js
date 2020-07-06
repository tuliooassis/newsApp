import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';

import styled from 'styled-components';

const BoxNews = styled(View)`
  background-color: white
  border-bottom-width: 1px
  border-bottom-color: #1a1c21
  border-radius: 1px
  margin-top: 10px
`;

const TitleNews = styled(Text)`
  padding: 10px
  color: #263047
  font-size: 20px
`;

const DescriptionNews = styled(Text)`
  color: #1a1c21
  padding: 10px
`;

const ImageNews = styled(Image)`
  width: ${Dimensions.get('window').width}px
  height: ${Dimensions.get('window').width}px
`;

const NewsItem = ({ title, abstract, multimedia }) => {
  return (
    <BoxNews>
      <TitleNews>{title}</TitleNews>
      <ImageNews source={{ uri: multimedia.url }}/>
      <DescriptionNews>{abstract}</DescriptionNews>
    </BoxNews>
  );
};

export default NewsItem;