const PicturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const cardTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const fillCardTemplate = (photoObj) => {
  const element = cardTemplate.cloneNode (true);

  element.querySelector('.picture__img').src = photoObj.url;
  element.querySelector('.picture__img').alt = photoObj.description;
  element.querySelector('.picture__comments').textContent = photoObj.comments.length;
  element.querySelector('.picture__likes').textContent = photoObj.likes;
  return element;
};

export const renderPictures = (data) => {
  data.forEach((cardObj) => {
    fragment.appendChild(fillCardTemplate(cardObj));
  });
  PicturesContainer.appendChild(fragment);
};
