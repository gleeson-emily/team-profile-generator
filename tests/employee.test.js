const Employee = require('../library/employee.js');

describe("Employee class", () => {
    const testWorker = new Employee("Jack", "Smith", 1, "jack@company.com", "Employee")
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
        
        });
    

    describe("email", () => {
        it("should return a valid email address in a string containing @", () => {
            expect(testWorker.email).toContain("@");
        }); 

        })
    describe("get functions", () => {
        it("should fetch the employee's name when getName is called", () =>
        {
            expect(testWorker.getName()).toEqual(`${testWorker.firstName} ${testWorker.lastName}`)
        })
        it("should fetch the employee's ID when getId is called", () =>{
            expect(testWorker.getId()).toEqual(`${testWorker.id}`);
        })
        it("should fetch the employee's email address when getEmail is called", () => {
            expect(testWorker.getEmail()).toEqual(`${testWorker.email}`);
        })
    })



});