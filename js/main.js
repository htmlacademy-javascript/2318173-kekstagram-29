import {renderPictures} from './pictures.js';
import {getPhotosData} from './data.js';
window.console.log(getPhotosData(25));

renderPictures(getPhotosData(25));
