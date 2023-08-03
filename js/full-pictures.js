import { isEscapeKey } from './util.js';
import { dataPhotos } from './load.js';

const COMMENTS_PER_PORTION = 5;
const STEP = 1;

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsShow = bigPicture.querySelector('.comments-show');
const picturesContainer = document.querySelector('.pictures');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const body = document.body;

let loadingStep;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCloseClick = () => {
  closeBigPicture();
};

const renderCommentsList = (comments) => {
  bigPicture.querySelector('.social__comments').innerHTML = comments
    .map((value) => createCommentTemplate(value))
    .join('');
};

const renderCommentsCounter = (loadedComments, totalComments) => {
  commentsCount.textContent = `${totalComments}`;
  commentsShow.textContent = `${loadedComments}`;
  if (loadedComments === totalComments) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onCommentsLoaderClick = () => {
  loadingStep += STEP;
  const comments = JSON.parse(bigPicture.dataset.comments);
  const restComments = comments.slice(0, loadingStep * COMMENTS_PER_PORTION);
  renderCommentsList(restComments);
  renderCommentsCounter(restComments.length, comments.length);
};

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
}

const onPicturesContainerClick = ({ target }) => {
  if (!target.closest('.picture')) {
    return;
  }
  const cardDataId = target.closest('.picture').dataset.id;
  const photoData = dataPhotos.find((element) => element.id === Number(cardDataId));
  fillBigPicture(photoData);
  openBigPicture();
};

function createCommentTemplate({ avatar, message, name }) {
  return `<li class='social__comment'>
    <img class='social__picture' src='${avatar}' alt='${name}' width='35' height='35'>
    <p class='social__text'>${message}</p>
  </li>`;
}

function fillBigPicture({ url, likes, comments, description }) {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.dataset.comments = JSON.stringify(comments);

  loadingStep = 1;
  const initialComments = comments.slice(0, COMMENTS_PER_PORTION);
  renderCommentsList(initialComments);
  renderCommentsCounter(initialComments.length, comments.length);
}

picturesContainer.addEventListener('click', onPicturesContainerClick);
