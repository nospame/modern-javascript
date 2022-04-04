var Chance = require('chance');

console.log("hello from javascript");
var rand = chance.natural({ min: 1, max: 52 });

console.log(`The random number is ${rand}.`);
