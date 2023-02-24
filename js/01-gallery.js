import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesList = galleryItems.map(
    ({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__img"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                width="100%"
                height="100%"
            />
        </a>
        </div>`;
    }).join('');

gallery.insertAdjacentHTML('beforeend', imagesList);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const imageEl = event.target.nodeName === 'IMG';
  if (!imageEl) {
    return;
  }

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600"/>`,
    {
      onShow: () => document.addEventListener('keydown', onCloseModal),
      onClose: () => document.removeEventListener('keydown', onCloseModal),
    }
  );
  instance.show();

  function onCloseModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(imagesList);