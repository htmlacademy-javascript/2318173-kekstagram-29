import { getData } from './api.js';
import {renderPictures } from './pictures.js';
import {showAlertError} from './util.js';

const imageFilter = document.querySelector('.img-filters');

let dataPhotos = null;

try {
  dataPhotos = await getData();
  renderPictures(dataPhotos);
  imageFilter.classList.remove('img-filters--inactive');
} catch{
  showAlertError('Данные не загружены. Попробуйте обновить страницу');
}

export { dataPhotos };
