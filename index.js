const fs = require('fs');
const readlineSync = require('readline-sync');

console.log('Welcome to Advent of Code 2021!\n');

// Get solution to run
let solutionNum = 0;
if (process.argv.length === 3 && !process.argv.includes('random')) {
  solutionNum = +process.argv[2];
} else if (!process.argv.includes('random')) {
  const solutionRaw = readlineSync.question('Which solution would you like to run?\n');
  solutionNum = +solutionRaw;
  console.log();
}

// Get folder for the requested day
let solutionModule = undefined;
if (solutionNum >= 1 && solutionNum <= 3) {
  solutionModule = 'day' + solutionNum.toLocaleString(undefined, { minimumIntegerDigits: 2 });
} else {
  console.log('No valid number provided, selecting a random solution');

  const possibleSolutions = [];

  fs.readdirSync('./src', { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory() && dirent.name.startsWith('day')) possibleSolutions.push(dirent.name);
  });

  solutionModule = possibleSolutions[Math.floor(Math.random() * possibleSolutions.length)];
}

// Run code
if (solutionModule) {
  console.log(`Running solution ${solutionModule}\n`);
  const code = require(`./src/${solutionModule}`);
  code.run();
}
