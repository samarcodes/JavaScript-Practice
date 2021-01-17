function Person(pName, pYearOfBirth, pJob) {
    this.name = pName
    this.yearOfBirth = pYearOfBirth
    this.job = pJob
}
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
}
Person.prototype.updateYearOfBirth = function(birthYear) {
    this.yearOfBirth = birthYear
}

var john = new Person('John', 1992, 'Pilot')
var claire = new Person('Claire', 1994, "Doctor")

john.calculateAge()
claire.calculateAge()
john.updateYearOfBirth(1998)
john.calculateAge()
claire.calculateAge()