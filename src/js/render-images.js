import { makeRequest } from './request';
import { markupCards, markupButtonLoad } from './markup';
import { refs } from './refs';
import { showMessage } from './show-message';


export const getImages = async () => {
  const images = await makeRequest();
  try {
    if (images.hits.length < 1) {
      showMessage();
      refs.gallery.innerHTML = '';
      return;
    }
    refs.gallery.innerHTML = markupCards(images);
    refs.gallery.insertAdjacentHTML('afterend', markupButtonLoad());
  } catch (error) {
    console.log(new Error(error));
  }
};


