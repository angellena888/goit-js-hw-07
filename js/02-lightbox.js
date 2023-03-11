import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesList = galleryItems.map(
    ({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
        />
    </a> `;
}).join('');

gallery.insertAdjacentHTML('beforeend', imagesList);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});

console.log(imagesList);