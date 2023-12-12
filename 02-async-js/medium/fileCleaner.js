const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    let str = data.trim().replace(/\s\s+/g, ' ');
    // console.log(str);
    fs.writeFile("a.txt", str, (err) => {
        if (err) {
            console.log(err.message);
        }
    })
})