import { NYT_API_KEY } from 'react-native-dotenv';
const NYT_URL = 'https://api.nytimes.com/svc/topstories/v2/';

const requestOptions = {
  method: 'GET',
};

export const getNYTNews = async (section) => {
  return fetch(`${NYT_URL}${section}.json?api-key=${NYT_API_KEY}`, requestOptions).then(response => response.json());
};