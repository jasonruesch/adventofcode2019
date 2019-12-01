const fs = require('fs');

fs.readFile('input', function (_, data) {
  let totalFuel = 0;
  data.toString().split('\n').forEach(function (mass) {
    totalFuel += Math.floor(mass / 3) - 2;
  });
  console.log(totalFuel);
});
