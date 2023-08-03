const ALERT_SHOW_TIME = 5000;
const timeoutDelay = 500;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error-alert');

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {showAlertError, isEscapeKey, debounce};
