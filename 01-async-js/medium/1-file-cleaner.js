/*
  ## File cleaner
  Read a file, remove all the extra spaces and write it back to the same file.

  For example, if the file input was
  ```
  hello     world    my    name   is       raman
  ```

  After the program runs, the output should be
  ```
  hello world my name is raman
  ```

  Function requirements:
  - `cleanString(content)`: Takes a string, removes extra spaces (collapses multiple consecutive whitespace characters into a single space, and trims whitespace at ends), and returns the cleaned string.
  - `cleanFile(filePath)`: Reads the file at `filePath` asynchronously, cleans the content using `cleanString`, writes the cleaned content back to the same file, and returns a Promise resolving with the cleaned string.

  Once you've implemented the logic, test your code by running:
  - `npm run test:medium-1`
*/

const fs = require('fs');

function cleanString(content) {

}

function cleanFile(filePath) {

}

module.exports = {
  cleanFile,
  cleanString,
};