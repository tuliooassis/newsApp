import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import NewsItem from '../components/NewsItem';
import ViewContainer from '../components/ViewContainer';

import { getNYTNews } from '../services/NewsService';

const News = ({ route }) => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const { results } = await getNYTNews();
    setNews(results);
  }

  useEffect(async () => {
    await getNews();
  }, []);

  return (
    <ViewContainer>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem title={item.title} abstract={item.abstract} />}
        keyExtractor={(item, index) => index}
      />
    </ViewContainer>
  )
}

export default News;