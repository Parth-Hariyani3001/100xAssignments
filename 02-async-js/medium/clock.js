setInterval(function () {
    const date = new Date();
    let hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();


    console.log(`${hr > 12 ? hr - 12 : hr} : ${min} : ${sec} ${hr >= 12 ? 'PM' : 'AM'}`);
}, 1000)