class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 30000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Salam', 36000);
console.log(friendlyPerson);
const studentPerson = new Person('Hero', 'SalJam', 45000);
console.log(studentPerson);