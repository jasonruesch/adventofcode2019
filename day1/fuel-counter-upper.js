let fs = require('fs');

let totalFuel = 0;

fs.readFile('input', function (error, data) {
  if (error) { throw error; }

  data.toString().split('\n').forEach(function (mass, index, arr) {
    if (index === arr.length - 1 && mass === '') { return; }

    const fuel = Math.floor(mass / 3) - 2;
    totalFuel += fuel;
  });

  console.log(totalFuel);
});