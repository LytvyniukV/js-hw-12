import { modalGallery } from './gallery-init';
import { refs } from './refs';
import { makeRequest } from './request';
import { markupCards } from './markup';
import { showMessage } from './show-message';


export let queryValue;
export let page = 1;
export const imagesPerPage = 40;


const getImages = async () => {
  const images = await makeRequest();
  try {
    if (images.hits.length < 1) {
      showMessage();
      refs.gallery.innerHTML = '';
      return;
    }
    if (images.totalHits > imagesPerPage) {
      refs.paginationBtn.classList.remove('hidden');
    }
    refs.gallery.innerHTML = markupCards(images);
  } catch (error) {
    console.log(new Error(error));
  }
};

export const renderCards = async event => {
  event.preventDefault();
  refs.paginationBtn.classList.add('hidden');
  refs.gallery.innerHTML = "<div class='loader'></div>";
  getImages();
  queryValue = refs.searchInput.value;
  page++;
  if(refs.searchInput.value !== queryValue){
    page = 1;
  }
  console.log(page);
  modalGallery.refresh();
  refs.searchForm.reset();
  
};

const pagination = () => {

}
// class Gallery {
//   #refs = {
//     searchForm: document.querySelector('.search-form'),
//     searchInput: document.querySelector('.search-input'),
//     // gallery: document.querySelector('.gallery'),
//     // loadBtn: document.querySelector('.btn-load-more'),
//   };
//   #page = 1;
//   #cardsPerPage = 40;
//   constructor(selectorGallery, selectorButton) {
//     this.gallery = document.querySelector(selectorGallery);
//     this.buttonLoadMore = document.querySelector(selectorButton);
//     this.renderCards();
//     // this.pagination();
//   }

//    makeRequest = async() => {
//     const response = axios.get(`https://pixabay.com/api`, {
//       params: {
//         key: '41495640-29bfe7f4b7a68b8700cb52105',
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         q: this.#refs.searchInput.value,
//         per_page: this.#cardsPerPage,
//         page: this.#page,
//       },
//     });
//     return (await response).data;
//   }

//   async responseData() {
//     return await makeRequest();
//   }

//   markup({ hits }) {
//     return hits.reduce(
//       (html, image) =>
//         html +
//         `
//     <li class='gallery-item'>
//         <a href="${image.largeImageURL}">
//         <img src="${image.webformatURL}" alt="${image.tags}" width='640' height='640'/>
//         </a>
//         <div class='info-wrap'>
//           <div>
//             <h3 class='card-title'>Likes</h3>
//             <p class='info-amount'>${image.likes}</p>
//           </div>
//           <div>
//             <h3 class='card-title'>Views</h3>
//             <p class='info-amount'>${image.views}</p>
//           </div>
//           <div>
//             <h3 class='card-title'>Comments</h3>
//             <p class='info-amount'>${image.comments}</p>
//           </div>
//           <div>
//             <h3 class='card-title'>Downloads</h3>
//             <p class='info-amount'>${image.downloads}</p>
//           </div>
//         </div>
//       </li>`,
//       ''
//     );
//   }

//   getImages = async(response) => {
//     try {
//       if (response.length < 1) {
//         showMessage();
//         refs.gallery.innerHTML = '';
//         return;
//       }
//       refs.gallery.innerHTML = markupCards(response);
//     } catch (error) {
//       console.log(new Error(error));
//     }
//   }

//   renderCards = (event) => {
//     event.preventDefault();
//     this.#refs.gallery.innerHTML = "<div class='loader'>Please wait...</div>";
//     this.getImages(this.responseData.hits);
//     modalGallery.refresh();
//     this.#refs.searchForm.reset();
//   }
// }

// export const gallery = new Gallery('.gallery', '.btn-load-more');
