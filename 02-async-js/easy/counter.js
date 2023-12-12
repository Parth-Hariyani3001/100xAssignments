let num = 3;
const myInterval = setInterval(function () {
    if (num == 0) {
        clearInterval(myInterval);
    }
    console.log(num);
    num--;
}, 1000)