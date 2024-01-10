import axios from 'axios';
import { page, imagesPerPage } from './create-search';

export const makeRequest = async userSearch => {
  
  const response = await axios.get(`https://pixabay.com/api`, {
    params: {
      key: '41495640-29bfe7f4b7a68b8700cb52105',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: userSearch,
      per_page: imagesPerPage,
      page: page,
    },
  });

  return response.data;
};
