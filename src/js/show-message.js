import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const showMessageError = () => {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please try again!`,
      backgroundColor: 'rgb(240, 115, 115)',
      messageColor: 'white',
      maxWidth: 300,
      position: 'topRight',
      timeout: 3000,
      progressBar: false,
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      messageSize: 14,
    });
  };

  export const showMessageEndImages = () => {
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      backgroundColor: '#afbef3',
      messageColor: 'white',
      maxWidth: 300,
      position: 'topRight',
      timeout: 3000,
      progressBar: false,
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      messageSize: 14,
    });
  }

  export const showMessageForEmptyInput = () =>{
    iziToast.info({
      message: `Please, enter some words to find picture`,
      backgroundColor: '#afbef3',
      messageColor: 'white',
      maxWidth: 300,
      position: 'topRight',
      timeout: 3000,
      progressBar: false,
      transitionIn: 'bounceInRight',
      transitionOut: 'fadeOutLeft',
      messageSize: 14,
    });
  }