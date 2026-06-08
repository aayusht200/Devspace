import { dayNames, monthNames } from '../data/data';
function padNum(num) {
      return num > 9 ? num : `0${num}`;
}

function randomId() {
      return crypto.randomUUID();
}
function clearLocalStorage(key) {
      localStorage.removeItem(key);
}
function toCapitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
}
function formatDate(time) {
      return {
            date: padNum(time.getDate()),
            day: padNum(time.getDay()),
            year: time.getFullYear(),
            month: padNum(time.getMonth()),
            dayStr: dayNames[time.getDay()],
            monthStr: monthNames[time.getMonth()],
      };
}
export { padNum, randomId, clearLocalStorage, toCapitalize, formatDate };
