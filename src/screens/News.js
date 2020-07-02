import React from 'react';
import NewsItem from '../components/NewsItem';

const News = ({ route }) => {
  console.log(route.name);
  return (
    <NewsItem />
  )
}

export default News;