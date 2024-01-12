export const createAutoScroll = () => {
    const galleryItem = document.querySelector('.gallery-item');
    const galleryItemParams = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: galleryItemParams.height * 2,
      behavior: 'smooth',
    });
}