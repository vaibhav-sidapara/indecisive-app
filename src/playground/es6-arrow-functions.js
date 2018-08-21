const square = function (x) {
    return x * x;
};
console.log(square(2));

//  Arrow Functions

const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(3));

const squareArrowTwo = (x) => x * x;
console.log(squareArrowTwo(2));

const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName('Vaibhav Sidapara'));