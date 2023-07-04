import {getRandomNumberFromRange} from './util.js';

const descriptions = [
  'Тусим!',
  'Очень круто отдыхаю',
  'Классно провожу лето',
  'Люблю это фото',
  'Моя лучшая фотография'
];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Иван',
  'Мария',
  'Виктор',
  'Юлия',
  'Ольга'
];

const getCommentObj = () => ({
  id: getRandomNumberFromRange(1, 500),
  avatar: `img/avatar-${getRandomNumberFromRange(1, 6)}.svg`,
  message: messages[getRandomNumberFromRange(0, messages.length)],
  name: names[getRandomNumberFromRange(0, names.length)]
});

const getPhotoObj = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: descriptions[getRandomNumberFromRange(0, descriptions.length)],
  likes: getRandomNumberFromRange(15, 200),
  comments: Array.from({length: getRandomNumberFromRange(0, 30)}, getCommentObj)
});

export const getPhotosData = (num) => {
  const photos = Array.from({length: num}, (_, index) => getPhotoObj(index + 1));
  return photos;
};

export const data = getPhotosData(25);
