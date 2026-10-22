/*
  ## Write to a file

  Using the fs library again, try to write to the contents of a file.
  You can use the fs library to as a black box, the goal is to understand async tasks.

  Function requirements:
  - `writeToFile(filePath, content)`: Writes `content` to `filePath` asynchronously using the `fs` module.
  - Returns a Promise that resolves when writing is successful, or rejects with an error.

  Once you've implemented the logic, test your code by running:
  - `npm run test:easy-4`
*/

const fs = require('fs');

function writeToFile(filePath, content) {

}

module.exports = writeToFile;