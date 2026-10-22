/*
  ## Reading the contents of a file

  Write code to read contents of a file and print it to the console. 
  You can use the fs library as a black box, the goal is to understand async tasks. 
  Try to do an expensive operation below the file read and see how it affects the output. 
  Make the expensive operation more and more expensive and see how it affects the output.

  Function requirements:
  - `readFromFile(filePath)`: Reads the content of `filePath` asynchronously using the `fs` module.
  - Returns a Promise that resolves with the file content as a string (utf-8 encoding), or rejects with an error if the file cannot be read.

  Once you've implemented the logic, test your code by running:
  - `npm run test:easy-3`
*/

const fs = require('fs');

function readFromFile(filePath) {

}

module.exports = readFromFile;
