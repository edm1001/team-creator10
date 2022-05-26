
const mainPage = require('./mainpage');
const fs = require('fs');

const createFile = (data) => {
  fs.writeFile('./dist/index.html', mainPage(data), err => {
    if (err) {
      reject(err);
      return;
    
    }

    else {
      console.log('File created in index.html inside dist folder!')
    }
  })
}

module.exports = { createFile };