import {data} from './data.js';

const COMMENTS_PER_PORTION = 5;

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const socialComment = commentsContainer.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.comments-show');
const commentsLoader = bigPicture.querySelector('.comments-loader');
let commentsShowNow = COMMENTS_PER_PORTION;


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
}

function selectionOfComments(commentsArr) {
  if (commentsArr.length <= 5) {
    commentsLoader.classList.add('hidden');
    commentsCount.textContent = commentsArr.length;
  }
  for (let i = 0; i <= commentsArr.length; i++) {
    if (i >= COMMENTS_PER_PORTION) {
      commentsArr[i].classList.toggle('hidden');
      commentsCount.textContent = commentsShowNow;
    }
  }
}

function onPicturesContainerClick({target}) {
  const cardDataId = target.closest('.picture').dataset.id;

  const photoData = data.find((element) => element.id === Number(cardDataId));
  fillBigPicture (photoData);

  selectionOfComments(commentsContainer.childNodes);

  window.console.log(commentsContainer.querySelectorAll('.hidden'));

  commentsLoader.addEventListener('click', () => {
    const hiddenComments = commentsContainer.querySelectorAll('.hidden');
    commentsShowNow = COMMENTS_PER_PORTION;
    commentsCount.textContent += commentsShowNow;
    window.console.log(hiddenComments);
    for (let i = 0; i < COMMENTS_PER_PORTION; i++) {
      if (i < COMMENTS_PER_PORTION) {
        socialComment[i].classList.toggle('.hidden');
      }
    }
  });

}


picturesContainer.addEventListener('click', onPicturesContainerClick);

