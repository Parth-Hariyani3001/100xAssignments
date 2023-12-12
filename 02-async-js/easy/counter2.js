let value = 3;
function myCounter() {
    if (value == 0) {
        return;
    }
    console.log(value);
    value--;
    setTimeout(myCounter, 1000)
}

myCounter();