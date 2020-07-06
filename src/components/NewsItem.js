import React from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components';

const BoxNews = styled(View)`
  background-color: white
  border: 1px solid #1a1c21 
  border-radius: 1px
  padding: 10px
  margin-top: 10px
`;

const TitleNews = styled(Text)`
  color: #263047
  font-size: 20px
`;

const DescriptionNews = styled(Text)`
  color: #1a1c21
  padding-top: 10px
`;

const NewsItem = ({ title, abstract }) => {
  return (
    <BoxNews>
      <TitleNews>{title}</TitleNews>
      <DescriptionNews>{abstract}</DescriptionNews>
    </BoxNews>
  );
};

export default NewsItem;