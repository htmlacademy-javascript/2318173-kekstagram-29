import './pictures.js';
import {isEscapeKey} from './util.js';
import {getPhotosData} from './data.js';

const bigPictureModal = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const bigPictureOpen = document.querySelectorAll('.picture');
const bigPictureClose = bigPictureModal.querySelector('.big-picture__cancel');

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const picture = document.querySelector('.big-picture__img img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const picturesArray = getPhotosData(25);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureModal.classList.add('hidden');
  }
};

function onClick (evt) {
  if (evt.target.closest('.picture')){
    bigPictureModal.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    for (let i = 0; i < picturesArray.length; i++) {
      picture.src = picturesArray[i].url;
      likes.textContent = picturesArray[i].likes;
      comments.textContent = picturesArray[i].comments.length;
      socialCaption.textContent = picturesArray[i].description;
    }
  }
}

picturesContainer.addEventListener('click', onClick);
document.addEventListener('keydown', onDocumentKeydown);

bigPictureClose.addEventListener('click', () => {
  bigPictureModal.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
});
