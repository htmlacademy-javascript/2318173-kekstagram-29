import { dataPhotos } from './load.js';
import {renderPictures } from './pictures.js';
import {debounce} from './util.js';

const filterDefaultButten = document.querySelector('#filter-default');
const filterRandomButten = document.querySelector('#filter-random');
const filterDiscussedButten = document.querySelector('#filter-discussed');
const picturesContainer = document.querySelector('.pictures');

function resetPhotos() {
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture)=> {
    picture.remove();
  });
}

function addActiveClass (buttonA, buttonB, buttonActive) {
  buttonA.classList.remove('img-filters__button--active');
  buttonB.classList.remove('img-filters__button--active');
  buttonActive.classList.add('img-filters__button--active');
}

function getRandomPhotos(arr) {
  const duplicate = arr.slice();
  for (let i = 0 ; (i < 10) && (i < duplicate.length) ; i++) {
    const r = Math.floor(Math.random() * (duplicate.length - i)) + i;
    const photo = duplicate[r];
    duplicate[r] = duplicate[i];
    duplicate[i] = photo;
  }
  return duplicate.slice(0, 10);
}

function getDiscussedPhotosFirst (arr) {
  const duplicate = arr.slice();
  duplicate.sort((a, b) => b.comments.length - a.comments.length);
  return duplicate;
}

function onfilterRandomButtenClick() {
  addActiveClass (filterDefaultButten, filterDiscussedButten, filterRandomButten);
  resetPhotos();

  renderPictures(getRandomPhotos(dataPhotos));
}

function onfilterDiscussedButtenClick() {
  addActiveClass (filterRandomButten, filterDefaultButten, filterDiscussedButten);
  resetPhotos();

  renderPictures(getDiscussedPhotosFirst (dataPhotos));
}

function onfilterDefaultButtenClick() {
  resetPhotos();
  addActiveClass (filterRandomButten, filterDiscussedButten, filterDefaultButten);

  renderPictures(dataPhotos);
}

filterDefaultButten.addEventListener('click', debounce(onfilterDefaultButtenClick));
filterRandomButten.addEventListener('click', debounce(onfilterRandomButtenClick));
filterDiscussedButten.addEventListener('click', debounce(onfilterDiscussedButtenClick));
