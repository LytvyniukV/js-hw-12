import { getImages } from './render-images';
import { modalGallery } from './gallery-init';
import { refs } from './refs';
export const renderCards = async event => {
  event.preventDefault();
  refs.gallery.innerHTML = "<div class='loader'>Please wait...</div>";
  getImages();
  modalGallery.refresh();
  refs.searchForm.reset();
};
