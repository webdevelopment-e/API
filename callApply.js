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


// const normalPerson = {
//     firstName: 'Rahim',
//     lastName: 'Uddin',
//     salary: 25000,
//     getFullName:(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount, tips, tax){
//         this.salary = this.salary-amount-tips-tax;
//         return this.salary;
//     }
// }

// console.log(normalPerson.firstName, normalPerson.lastName);
// console.log(normalPerson);
// normalPerson.chargeBill(200);
// console.log(normalPerson.salary);


// const heroPerson = {
//     firstName: 'Hero',
//     lastName: 'golam',
//     salary: 30000,
// }

// const friendlyPerson = {
//     firstName: 'Hero',
//     lastName: 'balam',
//     salary: 30000,
// }

// const studentPerson = {
//     firstName: 'Hero',
//     lastName: 'salam',
//     salary: 30000,
// }




// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);



// normalPerson.chargeBill();
// console.log(normalPerson);
// normalPerson.chargeBill.bind(heroPerson);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.apply(heroPerson, [800, 200, 10]);
// console.log(heroPerson.salary);

// again practice
const normalPerson = {
    firstName : "Rajaul",
    lastName : "Fahim",
    salary: 40000, 
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    // chargeBill: function(amount){
    //     this.salary = this.salary - amount;
    //     return this.salary;
    // }
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary-amount-tips-tax;
    }
}
// console.log(normalPerson);
// console.log(normalPerson.firstName);
// console.log(normalPerson.firstName, normalPerson.lastName);
// console.log(normalPerson.salary);
// normalPerson.chargeBill(1500,200);
// console.log(normalPerson.salary);

const programmerPerson = {
    firstName: "Yasin",
    lastName: "Zubaie",
    salary: 35000
}
const doctorPerson = {
    firstName: "Susain",
    lastName: "Zubuya",
    salary: 38000
}
const engineerPerson = {
    firstName: "Nacho",
    lastName: "Nitel",
    salary: 42000
}
const employeePerson = {
    firstName: "Sover",
    lastName: "Piplu",
    salary: 50000
}
// console.log(normalPerson.chargeBill(1200));
// const programmerBillCharge = normalPerson.chargeBill.bind(programmerPerson);
// programmerBillCharge(2000);
// console.log(programmerPerson.salary);

// const doctorBillCharge = normalPerson.chargeBill.bind(doctorPerson);
// doctorBillCharge(1500);
// console.log(doctorPerson.salary);

// const employeeGetName = normalPerson.getFullName.bind(employeePerson);
// console.log(employeePerson.firstName);
// console.log(employeePerson.lastName);

// normalPerson.chargeBill.call(programmerPerson, 900, 50, 20);
// console.log(programmerPerson.salary);

// normalPerson.chargeBill.call(doctorPerson, 1200, 20, 10);
// console.log(doctorPerson.salary);

normalPerson.chargeBill.apply(engineerPerson, [1000, 40, 10]);
console.log(engineerPerson.salary);

normalPerson.chargeBill.apply(doctorPerson, [1400, 300, 20]);
console.log(doctorPerson.salary);
