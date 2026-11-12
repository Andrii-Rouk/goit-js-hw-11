import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

// 1. Створюємо екземпляр SimpleLightbox

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}"
           alt="${image.tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b>${image.likes}</p>
          <p class="info-item"><b>Views</b>${image.views}</p>
          <p class="info-item"><b>Comments</b>${image.comments}</p>
          <p class="info-item"><b>Downloads</b>${image.downloads}</p>
        </div>
      </li>
    `;
    })
    .join('');

  gallery.innerHTML = markup;

  // 2. Оновлюємо літбокс після рендеру нових карток

  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.remove('is-hidden');
};

export const hideLoader = () => {
  loader.classList.add('is-hidden');
};
