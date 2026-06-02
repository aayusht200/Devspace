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
export { padNum, randomId, clearLocalStorage, toCapitalize };
