import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import NewsItem from '../components/NewsItem';
import ViewContainer from '../components/ViewContainer';

import { getNYTNews } from '../services/NewsService';

const News = ({ route }) => {
  const [news, setNews] = useState([]);
  const section = route.name;

  const getNews = async () => {
    const { results } = await getNYTNews(section);
    setNews(results);
  }

  useEffect(async () => {
    await getNews();
  }, []);

  return (
    <ViewContainer>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem item={item}/>}
        keyExtractor={(item, index) => index}
        initialNumToRender={5}
      />
    </ViewContainer>
  )
}

export default News;