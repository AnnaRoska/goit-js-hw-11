import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="photo-card">
          <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <ul class="ul-info">
            <li>Likes</li>
            <li>${likes}</li>
            </ul>
            <ul class="ul-info">
            <li>Views</li>
            <li>${views}</li>
            </ul>
            <ul class="ul-info">
            <li>Comments</li>
            <li>${comments}</li>
            </ul>
            <ul class="ul-info">
            <li>Downloads</li>
            <li>${downloads}</li>
            </ul>
          </div>
        </li>
      `;
      }
    )
    .join('');
}
export function clearGallery() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
