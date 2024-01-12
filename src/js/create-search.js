import { modalGallery } from './gallery-init';
import { refs } from './refs';
import { createGetImagesRequest } from './request';
import { renderImages } from './markup';
import { addClass, removeClass } from './manage-class';
import { createAutoScroll } from './scroll';
import { showMessageForEmptyInput } from './show-message';
let loadMoreImages = null;
export let page;
export const onSearch = async event => {
  event.preventDefault();
  refs.paginationBtn.classList.add('hidden');
  page = 1;
  if (loadMoreImages !== null) {
    refs.paginationBtn.removeEventListener('click', loadMoreImages);
    loadMoreImages = null;
  }
  const spinner = document.querySelector('.loader');
  const searchQuery = new FormData(event.currentTarget).get('query');
  if (searchQuery.trim() === '') {
    showMessageForEmptyInput();
    return;
  }
  refs.gallery.innerHTML = '';

  loadMoreImages = async () => {
    const images = await showSpinner({
      promise: createGetImagesRequest({
        page: page,
        q: searchQuery,
      }),
      spinner: spinner,
    });
    renderImages(images);
    modalGallery.refresh();
    if(page > 1) createAutoScroll();
    page++;
  };

  loadMoreImages();

  refs.searchForm.reset();
  refs.paginationBtn.addEventListener('click', loadMoreImages);

  async function showSpinner({ promise, spinner }) {
    removeClass(spinner);

    const response = await promise;

    addClass(spinner);

    return response;
  }
};
