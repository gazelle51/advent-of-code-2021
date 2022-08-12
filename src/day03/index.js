const fs = require('fs');
const path = require('path');

/**
 * Run the code to complete the Day X challenge.
 */
function run() {
  // Load input
  const jsonPath = path.join(__dirname, 'input.txt');
  const dataRaw = fs.readFileSync(jsonPath);
  const data = dataRaw.toString();

  console.log('Successfully loaded input data');
  console.log();

  // Convert data to array
  const binaryNums = data.split('\n');

  // Initialise counts
  const numberLength = binaryNums[0].length;
  const zeroCounts = new Array(numberLength).fill(0);
  const oneCounts = new Array(numberLength).fill(0);

  // Count the number of zeros and ones
  for (const num of binaryNums) {
    for (let i = 0; i < numberLength; i++) {
      if (num[i] === '0') zeroCounts[i] += 1;
      else oneCounts[i] += 1;
    }
  }

  // Find binary number for gamma and epsilon rates
  let gamma = '';
  let epsilon = '';
  for (let i = 0; i < numberLength; i++) {
    // More 0s in column i
    if (zeroCounts[i] > oneCounts[i]) {
      gamma = gamma + '0';
      epsilon = epsilon + '1';
    }

    // More 1s in column i
    else {
      gamma = gamma + '1';
      epsilon = epsilon + '0';
    }
  }

  // Convert gamma and epsilon to decimal
  const gammaDecimal = parseInt(gamma, 2);
  const epsilonDecimal = parseInt(epsilon, 2);

  console.log('What is the power consumption of the submarine?');
  console.log(gammaDecimal * epsilonDecimal);
  console.log();
}

module.exports = { run };
