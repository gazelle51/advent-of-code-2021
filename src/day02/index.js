const fs = require('fs');
const path = require('path');

/**
 * Run the code to complete the Day 2 challenge.
 */
function run() {
  // Load input
  const jsonPath = path.join(__dirname, 'input.txt');
  const dataRaw = fs.readFileSync(jsonPath);
  const data = dataRaw.toString();

  console.log('Successfully loaded input data');
  console.log();

  // Convert data to array of arrays
  const directions = data.split('\n').map((directionRaw) => {
    const direction = directionRaw.split(' ');
    direction[1] = Number(direction[1]);
    return direction;
  });

  // Initialise position (horizontal position, depth)
  const position = [0, 0];

  // Move submarine according to directions
  for (const [dir, units] of directions) {
    if (dir == 'forward') position[0] += units;
    else if (dir == 'down') position[1] += units;
    else if (dir == 'up') position[1] -= units;
  }

  console.log('What is the horizontal position multiplied by the depth?');
  console.log(position[0] * position[1]);
  console.log();
}

module.exports = { run };
