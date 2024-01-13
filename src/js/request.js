import axios from 'axios';
import {
  showMessageError,
  showMessageEndImages,
  showMessageFetchError,
} from './show-message';
import { refs } from './refs';
import { addClass, removeClass } from './manage-class';

const api = axios.create({
  params: {
    key: '41495640-29bfe7f4b7a68b8700cb52105',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});
const getResponse = async params => {
  const response = await api.get('https://pixabay.com/api/', { params });
  return response.data;
};

export const createGetImagesRequest = async ({ page, q }) => {
  const per_page = 40;

  try {
    const { hits, totalHits } = await getResponse({
      page,
      per_page,
      q,
    });
    if (hits.length < 1) {
      showMessageError();
      return;
    }

    if (per_page < totalHits) {
      removeClass(refs.paginationBtn);
    }
    if (page === Math.ceil(totalHits / per_page)) {
      addClass(refs.paginationBtn);
      showMessageEndImages();
    }

    return hits;
  } catch (error) {
    showMessageFetchError();
  }
};
