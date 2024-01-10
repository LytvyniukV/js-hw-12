import { showMessage } from './show-message';
import { refs } from './refs';

export function checkResponse(images) {
  if (images.hits.length < 1) {
    showMessage();
    refs.gallery.innerHTML = '';
    return;
  }
  if (images.totalHits > imagesPerPage) {
    refs.paginationBtn.classList.remove('hidden');
  }
}





