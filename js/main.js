import {getPhotoObj} from './data.js';
const photos = Array.from({length: 25}, (_, index) => getPhotoObj(index + 1));
window.console.log(photos);
