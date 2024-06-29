const { sha256 } = require('./index.js');

const hash = sha256("helloworld");
console.log(hash);
