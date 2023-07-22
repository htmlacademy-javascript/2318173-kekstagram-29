// import './pictures.js';
// import {isEscapeKey} from './util.js';


// const bigPictureModal = document.querySelector('.big-picture');
// const picturesContainer = document.querySelector('.pictures');
// const bigPictureClose = bigPictureModal.querySelector('.big-picture__cancel');

// const commentsCount = document.querySelector('.social__comment-count');
// const commentsLoader = document.querySelector('.comments-loader');

// const onDocumentKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeBigPicture ();
//   }
// };

// const onBigPictureCloseClick = () => {
//   closeBigPicture ();
// };

// function closeBigPicture () {
//   bigPictureModal.classList.add('hidden');
//   document.querySelector('body').classList.remove('modal-open');

//   document.removeEventListener('keydown', onDocumentKeydown);
//   bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
// }

// function openBigPicture () {
//   bigPictureModal.classList.remove('hidden');
//   document.querySelector('body').classList.add('modal-open');
//   commentsCount.classList.remove('hidden');
//   commentsLoader.classList.remove('hidden');

//   document.addEventListener('keydown', onDocumentKeydown);
//   bigPictureClose.addEventListener('click', onBigPictureCloseClick);
// }

// const onPicturesContainerClick = ({target}) => {
//   if (target.closest('.picture')){
//     openBigPicture ();
//   }
// };

// picturesContainer.addEventListener('click', onPicturesContainerClick);
