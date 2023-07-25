const OFF_SITE_SERVER = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const errorMessage = {
  GET_MESSAGE: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_MESSAGE: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const dataLoad = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${OFF_SITE_SERVER}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => dataLoad(Route.GET_DATA, errorMessage.GET_MESSAGE);

const sendData = (body) => dataLoad(Route.SEND_DATA, errorMessage.SEND_MESSAGE, Method.POST, body);

export {getData, sendData};
