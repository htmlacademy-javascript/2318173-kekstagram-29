import './pictures.js';
import {isEscapeKey} from './util.js';
import {getPhotosData} from './data.js';

const bigPictureModal = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const bigPictureOpen = Array.from(document.querySelectorAll('.picture'));
const bigPictureClose = bigPictureModal.querySelector('.big-picture__cancel');

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const pictureBig = document.querySelector('.big-picture__img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureModal.classList.add('hidden');
  }
};

const onClick = (evt) => {
  if (evt.target.closest('.picture')){
    bigPictureModal.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    // console.log(evt.target.closest('.picture').dataset.id);
    for (let i = 0; i < bigPictureOpen.length; i++) {
      // if (evt.target.closest('.picture').dataset.id === bigPictureOpen[i].id.toString()) {
      pictureBig.src = bigPictureOpen[i].url;
      likes.textContent = bigPictureOpen[i].likes;
      comments.textContent = bigPictureOpen[i].comments.length;
      socialCaption.textContent = bigPictureOpen[i].description;
      // }

      for (let j = 0; j < bigPictureOpen[i].comments.length; j++) {
        const element = socialComment.cloneNode(true);
        element.querySelector('.social__picture').src = bigPictureOpen[i].comments[j].avatar;
        element.querySelector('.social__picture').alt = bigPictureOpen[i].comments[j].name;
        element.querySelector('.social__text').textContent = bigPictureOpen[i].comments[j].message;
        socialComments.appendChild(element);
      }
    }
  }
};


picturesContainer.addEventListener('click', onClick);
document.addEventListener('keydown', onDocumentKeydown);

bigPictureClose.addEventListener('click', () => {
  bigPictureModal.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
});
