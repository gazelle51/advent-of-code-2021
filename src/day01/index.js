const fs = require('fs');
const path = require('path');

/**
 * Run the code to complete the Day 1 challenge.
 */
function run() {
  // Load input
  const jsonPath = path.join(__dirname, 'input.txt');
  const dataRaw = fs.readFileSync(jsonPath);
  const data = dataRaw.toString();

  console.log('Successfully loaded input data');
  console.log();

  // Convert to array
  const depth = data.split('\n').map(Number);

  console.log('How many measurements are larger than the previous measurement?');
  console.log(countIncreases(depth));
  console.log();

  // Create array of sliding windows (sum of three adjacent items)
  const depthSliding = [];
  for (const [i, value] of depth.entries()) {
    if (i in [0, 1]) continue;
    const window = depth.slice(i - 2, i + 1);
    const windowSum = window.reduce((acc, x) => acc + x, 0);
    depthSliding.push(windowSum);
  }

  console.log(
    'Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?'
  );
  console.log(countIncreases(depthSliding));
  console.log();
}

/**
 * Count how many values in the area are bigger than the immediately previous value.
 * @param {number[]} data - data to compare
 * @returns integer
 */
function countIncreases(data) {
  // Initialise to zero
  let totalIncreases = 0;

  // Compare each value with the previous value
  for (const [i, value] of data.entries()) {
    if (i === 0) continue;
    if (value > data[i - 1]) totalIncreases++;
  }

  return totalIncreases;
}

module.exports = { run };
