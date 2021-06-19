const Employee = require('../library/employee.js');

describe("Employee class", () => {
    const testWorker = new Employee("Jack", "Smith", 1, "jack@company.com", "Employee")
    const testWorker2 = new Employee("Jane", "Doe", "ID", "janedoe", "CEO")
    it("should create a new class called Employee containing five base properties", () => {
     expect(testWorker).toEqual({ firstName: "Jack", lastName: "Smith", id: 1, email: "jack@company.com", role: "Employee"})
    });

    describe("names", () => {
    it("should return a value for both the employee's first and last names", () => { 
        expect(testWorker.firstName).toEqual("Jack");
        expect(testWorker.lastName).toEqual("Smith");
    }); 
    });

    describe("id number", () => {
        it("should return a number that represents the employee's id", () => {
            expect(testWorker.id).not.toBeNaN;
        });
        it("should throw an error if a non-interger is entered as the employee id", () => {
            let err = new Error("Please enter a valid number.")
            expect(testWorker2.getId).toThrow(err);
        })
    });

    describe("email", () => {
        it("should return a valid email address in a string containing @", () => {
            expect(testWorker.email).toContain("@");
        }); 

        it("should throw an error if a string without @ is entered", () => {
            err = new Error("Please enter a valid email address.")
            expect(testWorker2.getEmail).toThrow(err);
        })
    })




});