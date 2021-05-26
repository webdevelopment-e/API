// const normalPerson = {
//     firstName : 'Rahim',
//     lastName : 'uddin',
//     salary : 25000,
//     getFullName : function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// }
// // console.log(normalPerson.firstName);
// // console.log(normalPerson.lastName);
// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);


const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 25000,
    getFullName(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }
}

// console.log(normalPerson.firstName, normalPerson.lastName);
// console.log(normalPerson);
// normalPerson.chargeBill(200);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName: 'Hero',
    lastName: 'golam',
    salary: 30000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'balam',
    salary: 30000,
}

const studentPerson = {
    firstName: 'Hero',
    lastName: 'salam',
    salary: 30000,
}




// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);



// normalPerson.chargeBill();
// console.log(normalPerson);
// normalPerson.chargeBill.bind(heroPerson);

normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [800, 200, 10]);
console.log(heroPerson.salary);