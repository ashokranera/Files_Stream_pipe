let fs = require('fs');

let greet = fs.readFileSync(`${__dirname}/greet.txt`, `utf8`);
console.log(greet);

let greet1 = fs.readFile(`${__dirname}/greet.txt`, `utf8`, (err, data) => {

 console.log(data)
 
})
console.log('file read done!')
