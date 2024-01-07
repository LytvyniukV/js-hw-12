import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const showMessage = () => {
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