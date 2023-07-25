import { getData } from './api.js';
import { renderPictures } from './pictures.js';
import {showAlertError} from './util.js';

let dataPhotos = null;

getData()
  .then((data) => {
    dataPhotos = data;
  })
  .then(() => {
    renderPictures(dataPhotos);
  })
  .catch(() => showAlertError('Данные не загружены. Попробуйте обновить страницу'));

export { dataPhotos };
