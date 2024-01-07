import axios from 'axios';
import { refs } from './refs';

export const makeRequest = async () => {
  const response = axios.get(`https://pixabay.com/api`, {
    params: {
      key: '41495640-29bfe7f4b7a68b8700cb52105',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: refs.searchInput.value,
      per_page: 40,
      // page: page,
    },
  });
  return (await response).data
};
