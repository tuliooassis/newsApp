import React from 'react';
import { Text, View } from 'react-native';
import Moment from 'moment';

import styled from 'styled-components';

import ImageNews from './ImageNews';

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
  font-size: 16px
`;

const AdditionalInformation = styled(Text)`
  color: #1a1c21
  padding-left: 10px
  padding-bottom: 10px
`;

const NewsItem = ({ title, abstract, published_date, byline, multimedia }) => {
  return (
    <BoxNews>
      <TitleNews>{title}</TitleNews>
      <ImageNews multimedia={multimedia}/>
      <DescriptionNews>{abstract}</DescriptionNews>
      <AdditionalInformation>{Moment(published_date).format('d MMMM YY')} {byline ? ' - ' + byline : ''}</AdditionalInformation>
    </BoxNews>
  );
};

export default NewsItem;