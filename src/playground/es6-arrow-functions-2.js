// Arguments Object - No longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(1, 2, 3));

// This keyword - no longer bound

const user = {
    name: 'Vaibhav',
    cities: ['Mumbai', 'Singapore'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
           console.log(this.name + ' had lived in ' + city);
        });
    }
};
user.printPlacesLived();

const multiplier = {
  numbers: [1, 4, 6],
  multiplyBy: 2,
  multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());