import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery } from './js/render-functions.js';
const inputImg = document.querySelector('[name="search-text"]');

const btnImg = document.querySelector('.btn-img');
const frmImg = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

frmImg.addEventListener('submit', e => {
  e.preventDefault();
  if (inputImg.value.length === 0) {
    iziToast.show({
      color: 'red',
      position: 'center',
      message: '❌ Fill in the search field',
    });
    return;
  }

  getImagesByQuery(inputImg.value).then(images => {
    const markup = createGallery(images);
    gallery.innerHTML = markup;
    clearGallery();
  });
  e.target.reset();
});
