import {data} from './data.js';

const COMMENTS_PER_PORTION = 5;

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.comments-show');
const commentsLoader = bigPicture.querySelector('.comments-loader');
let commentsShow = 0;

function createCommentTemplate ({avatar, message, name}) {
  return `<li class="social__comment">
    <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
    <p class="social__text">${message}</p>
  </li>`;
}


function fillBigPicture (photoObj) {
  bigPicture.querySelector('.big-picture__img img').src = photoObj.url;
  bigPicture.querySelector('.likes-count').textContent = photoObj.likes;
  bigPicture.querySelector('.comments-count').textContent = photoObj.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photoObj.description;
  const commentsData = photoObj.comments.map((value) => createCommentTemplate (value));
  commentsContainer.innerHTML = commentsData.join('');
  window.console.log(commentsData.slice(5,commentsData.length));
}

function selectionOfComments() {

}

function onPicturesContainerClick({target}) {
  const cardDataId = target.closest('.picture').dataset.id;

  const photoData = data.find((element) => element.id === Number(cardDataId));
  fillBigPicture (photoData);
}


picturesContainer.addEventListener('click', onPicturesContainerClick);

