import {data} from './data.js';
const picturesContainer = document.querySelector('.pictures');

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
}

picturesContainer.addEventListener('click', onPicturesContainerClick);
// const pictureBig = document.querySelector('.big-picture__img img');
// const likes = document.querySelector('.likes-count');
// const comments = document.querySelector('.comments-count');
// const socialComments = document.querySelector('.social__comments');
// const socialComment = document.querySelector('.social__comment');
// const socialCaption = document.querySelector('.social__caption');

//   for (let j = 0; j < bigPictureOpen[i].comments.length; j++) {
//     const element = socialComment.cloneNode(true);
//     element.querySelector('.social__picture').src = bigPictureOpen[i].comments[j].avatar;
//     element.querySelector('.social__picture').alt = bigPictureOpen[i].comments[j].name;
//     element.querySelector('.social__text').textContent = bigPictureOpen[i].comments[j].message;
//     socialComments.appendChild(element);
//   }

