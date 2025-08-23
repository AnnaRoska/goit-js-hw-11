import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery } from './js/render-functions.js';
import { showLoader, hideLoader } from './js/render-functions.js';

const inputImg = document.querySelector('[name="search-text"]');
const frmImg = document.querySelector('.form');

frmImg.addEventListener('submit', async e => {
  e.preventDefault();
  const query = inputImg.value.trim();
  if (query.length === 0) {
    iziToast.error({
      position: 'center',
      message: '❌ Fill in the search field',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    createGallery(images);
    if (!images || images.length === 0) {
      iziToast.warning({
        position: 'center',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
  } catch (err) {
    iziToast.error({
      position: 'center',
      message: err.message,
    });
  } finally {
    hideLoader();
    frmImg.reset();
  }
});
