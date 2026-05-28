function padNum(num) {
    return num > 9 ? num : `0${num}`;
}

function randomId() {
    return crypto.randomUUID();
}
function clearLocalStorage(key) {
    localStorage.removeItem(key);
}
export { padNum, randomId, clearLocalStorage };
