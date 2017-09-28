//readfilesync.js
var fs = require('fs');
var data = fs.readFileSync('http\\file-1.txt', 'utf-8');
console.log(data);
console.log('end.');