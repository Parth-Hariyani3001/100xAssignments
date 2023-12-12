/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function (resolve) {
        setTimeout(() => { resolve('Promise 1 resolved') }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise(function (resolve) {
        setTimeout(() => { resolve('Promise 1 resolved') }, 10000);
    })
}

function waitThreeSecond() {
    return new Promise(function (resolve) {
        setTimeout(() => { resolve('Promise 1 resolved') }, 3000);
    })
}

function calculateTime() {
    const startTime = new Date().getTime();
    const a = waitOneSecond();
    const b = waitTwoSecond();
    const c = waitThreeSecond();
    Promise.all([a, b, c])
        .then(results => console.log((new Date().getTime() - startTime) / 1000))

}
calculateTime();
