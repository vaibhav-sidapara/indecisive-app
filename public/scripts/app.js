'use strict';

// Arguments Object - No longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(1, 2, 3));

// This keyword - no longer bound

var user = {
    name: 'Vaibhav',
    cities: ['Mumbai', 'Singapore'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' had lived in ' + city);
        });
    }
};
user.printPlacesLived();

var multiplier = {
    numbers: [1, 4, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
