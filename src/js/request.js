import { refs } from './refs';

export const getImages = () => {
  const searchOptions = new URLSearchParams({
    key: '41495640-29bfe7f4b7a68b8700cb52105',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: refs.searchInput.value,
  });
  return fetch(`https://pixabay.com/api/?${searchOptions}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request is not ok');
    }
  });
};
