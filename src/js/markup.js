import { refs } from './refs';

export const renderImages = (images = []) => {
  if(images.length < 1) return;
  const markupCards = images.reduce(
    (
      html,
      { largeImageURL, webformatURL, tags, likes, views, comments, downloads }
    ) =>
      html +
      `
        <li class='gallery-item'>
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width='640' height='640'/>
            </a>
            <div class='info-wrap'>
              <div>
                <h3 class='card-title'>Likes</h3>
                <p class='info-amount'>${likes}</p>
              </div>
              <div>
                <h3 class='card-title'>Views</h3>
                <p class='info-amount'>${views}</p>
              </div>
              <div>
                <h3 class='card-title'>Comments</h3>
                <p class='info-amount'>${comments}</p>
              </div>
              <div>
                <h3 class='card-title'>Downloads</h3>
                <p class='info-amount'>${downloads}</p>
              </div>
            </div>
          </li>`,
    ''
  );

  refs.gallery.insertAdjacentHTML('beforeend', markupCards);
};
