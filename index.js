var Chance = require('chance');

console.log("hello from javascript");
var rand = chance.natural({ min: 2, max: 10 });
var firstName = chance.first();
var lastName = chance.last();
var age = chance.age();
var pet = chance.animal({ type: 'pet' });

console.log(`The random number is ${rand}.`);
console.log("This is automatic");
console.log(`Someone's name is ${firstName} ${lastName}`);
console.log(`${firstName} is ${age} years old and has ${rand} pet ${pet.toLowerCase()}.`);
