const fs = require('fs');
const path = require('path');

/**
 * Run the code to complete the Day X challenge.
 */
function run() {
  // Load input
  const jsonPath = path.join(__dirname, 'input-small.txt');
  const dataRaw = fs.readFileSync(jsonPath);
  const data = dataRaw.toString();

  console.log('Successfully loaded input data');
  console.log();

  // Convert data to array
  const dataNew = data.split('\n');
  console.log(dataNew);
}

module.exports = { run };
