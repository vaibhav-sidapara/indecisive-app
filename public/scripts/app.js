'use strict';

var nameVar = 'Vaibhav';
var nameVar = 'Sidapara';
nameVar = 'VS';
console.log('nameVar', nameVar);

var nameLet = 'Vaibhav';
nameLet = 'Sidapara';
console.log('nameLet', nameLet);

var nameConst = 'Vaibhav';
console.log('nameConst', nameConst);

// Block Scoping

var fullName = 'Vaibhav Sidapara';
var firstName = void 0;

if (fullName) {
   firstName = fullName.split(" ")[0];
   console.log(firstName);
}

console.log(firstName);
