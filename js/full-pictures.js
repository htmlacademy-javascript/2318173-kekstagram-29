import {data} from './data.js';
const picturesContainer = document.querySelector('.pictures');
const socialComment = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const comment = document.createDocumentFragment();


function fillBigPicture (photoObj) {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').src = photoObj.url;
  bigPicture.querySelector('.likes-count').textContent = photoObj.likes;
  bigPicture.querySelector('.comments-count').textContent = photoObj.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photoObj.description;
}

function onPicturesContainerClick(evt) {
  const cardDataId = evt.target.closest('.picture').dataset.id;

  const photoData = data.find((element) => element.id === Number(cardDataId));
  fillBigPicture (photoData);
  photoData.comments.map((value) => {
    const element = socialComment.cloneNode(true);
    element.querySelector('.social__picture').src = value.avatar;
    element.querySelector('.social__picture').alt = value.name;
    element.querySelector('.social__text').textContent = value.message;
    comment.appendChild(element);
    commentsContainer.appendChild(comment);
  });
}

picturesContainer.addEventListener('click', onPicturesContainerClick);

