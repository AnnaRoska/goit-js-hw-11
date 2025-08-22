import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showLoader, hideLoader } from './render-functions.js';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    key: '51904026-11e1c7708336e49fc55c25133',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  showLoader();
  return axios
    .get(url)
    .then(res => {
      if (res.data.hits.length === 0) {
        iziToast.show({
          color: 'red',
          position: 'center',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      return res.data.hits;
    })
    .catch(err => console.error(err))
    .finally(() => hideLoader());
}
