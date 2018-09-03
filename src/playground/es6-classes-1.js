class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetings() {
        return `Hi, I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description = `${description} Their major is ${this.major}`
        }

        return `${description}`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreetings() {
        let greetings = super.getGreetings();

        if(this.hasHomeLocation()) {
            greetings = `${greetings} I am visiting from ${this.homeLocation}`
        }

        return greetings;
    }
}

const me = new Traveler('Vaibhav Sidapara', 26, 'Singapore');
console.log(me.getGreetings());

const other = new Traveler();
console.log(other.getGreetings());