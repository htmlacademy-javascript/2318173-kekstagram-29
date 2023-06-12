function getStringLength (string, length) {
  return string.length > length ? 'true' : 'false';
}
console.log(getStringLength ("попробовать", 12));

function checkString (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();

  let newString = '';

  for (let i = normalizedString.length - 1; i >= 0; --i) {
    newString += normalizedString[i];
  }
  return newString === normalizedString ? 'true' : 'false';
}

console.log(checkString ('Я иду с      мечем судия'));
