const fs = require('fs');

fs.readFile('input', function (_, data) {
  let totalFuel = 0;
  data.toString().split('\n').forEach(function (mass) {
    if (mass === '') { return; }

    let moduleFuel = Math.floor(mass / 3) - 2;
    let fuel = moduleFuel;
    while (fuel >= 0) {
       fuel = Math.floor(fuel / 3) - 2;
       moduleFuel += fuel > 0 ? fuel : 0;
    }
    totalFuel += moduleFuel;
  });
  console.log(totalFuel);
});