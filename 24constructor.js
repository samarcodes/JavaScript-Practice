//one way for objects
var person = {
    name: 'Jack',
    yearOfBirth: 1990,
    job: 'Secret Agent'
}

//but what if we want n numbers of objects
//Constructor Functions
function Person(pName, pYearOfBirth, pJob) {
    this.name = pName
    this.yearOfBirth = pYearOfBirth
    this.job = pJob
    this.calculateAge = function() {
        console.log(2020 - this.yearOfBirth)
    }
}

//new keyword is used to instansiate a new Person
var john = new Person('John', 1992, 'Pilot')
john.calculateAge()

var claire = new Person('Claire', 1994, "Doctor")
claire.calculateAge()