const fs = require("fs");

const str = "This message will replace the a.txt contents";

fs.writeFile("a.txt", str, function (err) {
    if (err) {
        console.log(err);
    }
})