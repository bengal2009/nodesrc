//readfile.js  Call Back
var fs = require('fs');
fs.readFile('http\\file-1.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end.');