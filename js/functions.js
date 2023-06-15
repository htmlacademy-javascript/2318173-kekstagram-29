function checkStringLength (string, length) {
  return string.length > length;
}
window.console.log(checkStringLength ('попробовать', 12));

function isPolindrome (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';

  for (let i = normalizedString.length - 1; i >= 0; --i) {
    newString += normalizedString[i];
  }
  return newString === normalizedString;
}

window.console.log(isPolindrome ('Я иду с      мечем судия'));
