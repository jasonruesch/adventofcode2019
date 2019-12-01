let fs = require('fs');

fs.readFile('input', function (_, data) {
  let totalFuel = 0;
  data.toString().split('\n').forEach(function (mass) {
    const fuel = Math.floor(mass / 3) - 2;
    totalFuel += fuel;
  });
  console.log(totalFuel);
});