// Nested Promises - DOOM!!!
// getWordOfTheDay().then((word) => {
//     console.log(`The word of the day is ${word}.`);
//     console.log("sending to friend...");
//     tellFriend(word).then((response) => {
//         console.log("Friend responded:");
//         console.log(response);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

// Promise Chaining
// getWordOfTheDay().then((word) => {
//     console.log(`The word of the day is ${word}.`);
//     console.log("sending to friend...");
//     return tellFriend();
// }).then((response) =>{
//     console.log("Friend responded:");
//     console.log(response);
// }).catch((err) => {
//     console.log(err);
// });

// Promise walkthrough
function slowEcho(message, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // let random = Math.floor(Math.random() * 10);
            let random = 2;
            if (random % 2 == 0) {
                resolve(message);   // send back the message
            }
            else {
                reject(new Error("Something odd happened!"));
            }            
        }, delay);
    });
}

$("#btn").click( () => {
    Promise.all([   // returns array of messages returned from slowEcho
        slowEcho("I waited one second!", 1000), 
        slowEcho("I waited two seconds!", 2000),
        slowEcho("I waited three seconds!", 3000)
    ]).then( ([result1, result2, result3]) => {
    // ]).then( (value) => {
        // let result1 = value[0];
        // let result2 = value[1];
        // let result3 = value[2];
        console.log(result1);
        console.log(result2);
        console.log(result3);
        // console.log(value);
    }).catch((err)  => {
        console.log(err);
    }) 

    // let promise = slowEcho("Hello World!", 1000);  // returns a promise
    // promise.then( (mess) => {
    //     console.log(mess);
    // }).catch( (err) => {
    //     console.log(err);
    // }); 
});



// let p = new Promise((resolve, reject) => { // this is the same as line 57
//     resolve("Hello!");
// });

// let p = Promise.resolve("Hello!");
// let q = Promise.reject(new Error("Uh oh!"));
// p.then( (message) => {
//     console.log(message);
// }).catch( (err) => {
//     console.log(err);
// });

// q.then( (message) => {
//     console.log(message);
// }).catch( (err) => {
//     console.log(err);
// });

