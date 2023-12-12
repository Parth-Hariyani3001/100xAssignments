/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve) {
        resolve(n);
    })
}

function wow(n) {
    setTimeout(function () { console.log("Hello there") }, n * 1000)
}

const a = wait(5);
a.then(wow)