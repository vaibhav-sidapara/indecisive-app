var nameVar = 'Vaibhav';
var nameVar = 'Sidapara';
nameVar = 'VS';
console.log('nameVar', nameVar);

let nameLet = 'Vaibhav';
nameLet = 'Sidapara';
console.log('nameLet', nameLet);

const nameConst = 'Vaibhav';
console.log('nameConst', nameConst);

// Block Scoping

const fullName = 'Vaibhav Sidapara';
let firstName;

if (fullName) {
   firstName = fullName.split(" ")[0];
   console.log(firstName);
}

console.log(firstName);