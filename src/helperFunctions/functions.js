function padNum(num) {
    return num > 9 ? num : `0${num}`;
}

function randomId() {
    return crypto.randomUUID();
}

export { padNum, randomId };
