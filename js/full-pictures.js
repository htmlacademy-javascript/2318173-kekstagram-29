import {data} from './data.js';
const picturesContainer = document.querySelector('.pictures');
const commentsContainer = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const comment = document.createDocumentFragment();

function fillBigPicture (photoObj) {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').src = photoObj.url;
  bigPicture.querySelector('.likes-count').textContent = photoObj.likes;
  bigPicture.querySelector('.comments-count').textContent = photoObj.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photoObj.description;
}
function fillComments (photoObj) {
  const element = socialComment.cloneNode (true);
  element.querySelector('.social__picture').src = photoObj.comments.avatar;
  element.querySelector('.social__picture').alt = photoObj.comments.name;
  element.querySelector('.social__text').textContent = photoObj.comments.message;
  return element;
}


function onPicturesContainerClick(evt) {
  const cardDataId = evt.target.closest('.picture').dataset.id;

  const photoData = data.find((element) => element.id === Number(cardDataId));
  fillBigPicture (photoData);
  data.map(() => {
    comment.appendChild(fillComments(photoData));
    commentsContainer.appendChild(comment);
  });
}

picturesContainer.addEventListener('click', onPicturesContainerClick);

// const socialComment = document.querySelector('.social__comment');
// const socialCaption = document.querySelector('.social__caption');

//   for (let j = 0; j < bigPictureOpen[i].comments.length; j++) {
//     const element = socialComment.cloneNode(true);
//     element.querySelector('.social__picture').src = bigPictureOpen[i].comments[j].avatar;
//     element.querySelector('.social__picture').alt = bigPictureOpen[i].comments[j].name;
//     element.querySelector('.social__text').textContent = bigPictureOpen[i].comments[j].message;
//     socialComments.appendChild(element);
//   }

