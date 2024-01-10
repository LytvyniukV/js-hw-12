import { modalGallery } from './gallery-init';
import { refs } from './refs';
import { makeRequest } from './request';
import { checkResponse } from './check-response';
import { renderImages } from './markup';

export const imagesPerPage = 40;
export let page = 1;
let queryValue;
// const customLoader = "<div class='loader'></div>";

export const onSearch = async event => {
  event.preventDefault();
  refs.paginationBtn.classList.add('hidden');
  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;
  if (searchQuery.trim() === '') return;
  queryValue = searchQuery;
  
  try {
    const images = await makeRequest(queryValue);
    checkResponse(images);
    renderImages(images);
    modalGallery.refresh();
    refs.searchForm.reset();
  } catch (error) {
    console.log(new Error(error)); // спробувати видавати повідомлення якщо не знайшли картинок через ф-ію showMessage
  }
  page = 2;

  // refs.gallery.innerHTML = customLoader;  ПРИДУМАТИ ЩОСЬ З ЗАГРУЗКОЮ
};

const pagination = () => {};









