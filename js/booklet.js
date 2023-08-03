import {isEscapeKey} from './util.js';

const popupContainer = document.querySelector('main');
let booklet;

const isErrorCls = () => document.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

function closePopup () {
  booklet.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onBookletClick = (evt, cls) => {
  const {classList} = evt.target;
  if (classList.contains(`${cls}__inner`) || classList.contains(`${cls}__title`)) {
    return;
  }
  closePopup();
};

const onCloseButtonClick = () => {
  closePopup();
};

function showBooklet(cls) {
  booklet = document.querySelector(`#${cls}`).cloneNode(true).content.querySelector(`.${cls}`);
  popupContainer.insertAdjacentElement('afterbegin', booklet);
  booklet.classList.remove('hidden');
  const bookletCloseButton = booklet.querySelector(`.${cls}__button`);


  document.addEventListener('keydown', onDocumentKeydown);
  bookletCloseButton.addEventListener('click', onCloseButtonClick);
  booklet.addEventListener('click',(e) => onBookletClick (e, cls));
}

export {isErrorCls, showBooklet};
