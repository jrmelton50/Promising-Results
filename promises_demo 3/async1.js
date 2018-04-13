getWordOfTheDay().then((word) => {
    console.log(`The word of the day is ${word}.`);
}, (err) => {
    console.log(err);
});