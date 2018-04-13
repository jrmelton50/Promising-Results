const wait = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};

function getWordOfTheDay() {
    return wait(1000)
    .then(() => {
        return coinFlip();
    }).then((shouldResolve) => {
        if (shouldResolve) {
            return Promise.resolve('Pizza');
        } else {
            return Promise.reject(new Error('Could not retrieve the word of the day.'));
        }
    });
}

function tellFriend(value) {
    return wait(1000)
    .then(() => {
        return coinFlip();
    }).then((shouldResolve) => {
        if (shouldResolve) {
            return Promise.resolve('Thanks!');
        } else {
            return Promise.reject(new Error('Could not broadcast message to your friend.'));
        }
    });
}

function coinFlip() {
    let num = Math.floor(Math.random() * 10);
    return num % 2 === 0;
}