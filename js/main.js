import {renderPictures} from './pictures.js';
import {getPhotosData} from './data.js';
import './user-modal.js';

window.console.log(getPhotosData(25));

renderPictures(getPhotosData(25));
