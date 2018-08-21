"use strict";

var square = function square(x) {
  return x * x;
};
console.log(square(2));

//  Arrow Functions

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log(squareArrow(3));

var squareArrowTwo = function squareArrowTwo(x) {
  return x * x;
};
console.log(squareArrowTwo(2));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};
console.log(getFirstName('Vaibhav Sidapara'));
