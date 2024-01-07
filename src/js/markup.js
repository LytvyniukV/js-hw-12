export const markup = ({ hits }) => {
  return hits.reduce(
    (html, image) =>
      html +
      `
    <li class='gallery-item'>
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" width='640' height='640'/>
        </a>
        <div class='info-wrap'>
          <div>
            <h3 class='card-title'>Likes</h3>
            <p class='info-amount'>${image.likes}</p>
          </div>
          <div>
            <h3 class='card-title'>Views</h3>
            <p class='info-amount'>${image.views}</p>
          </div>
          <div>
            <h3 class='card-title'>Comments</h3>
            <p class='info-amount'>${image.comments}</p>
          </div>
          <div>
            <h3 class='card-title'>Downloads</h3>
            <p class='info-amount'>${image.downloads}</p>
          </div>
        </div>
      </li>`,
    ''
  );
};
