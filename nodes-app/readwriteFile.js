const fs = require('fs');

// const book = {
//     'title': 'Ego is the enemy',
//     'author': 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-JSON.json', bookJson);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer.toString());
console.log(JSON.parse(dataBuffer.toString()));
console.log(JSON.parse(dataBuffer.toString()).author);
