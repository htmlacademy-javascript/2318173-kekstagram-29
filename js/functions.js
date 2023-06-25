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

// Вспомогательная функция для перевода в минуты
function parseTime(time) {
  const parts = time.split(':').map(Number);
  const [hours, minutes] = parts;
  const minutesPerHour = 60;

  return hours * minutesPerHour + minutes;
}

function isMeetingTime (beginningOfWorkingDay, endingOfWorkingDay, beginningOfMeeting, duration) {
  const beginningOfWorkingDayMinutes = parseTime(beginningOfWorkingDay);
  const endingOfWorkingDayMinutes = parseTime(endingOfWorkingDay);
  const beginningOfMeetingMinutes = parseTime(beginningOfMeeting);
  const endingOfMeetingMinutes = beginningOfMeetingMinutes + duration;
  return beginningOfMeetingMinutes >= beginningOfWorkingDayMinutes && endingOfMeetingMinutes <= endingOfWorkingDayMinutes;
}

window.console.log (isMeetingTime('08:00', '14:30', '14:00', 90));

