const Manager = require("../library/manager.js");

describe("Manager class", () => {
    const testManager = new Manager("Michael", "Scott", 55, "mscott@dundermifflin.com", 55)
    it("should extend the Employee class by providing the five base properties of Employee plus an additional officeNumber property", () => {
         expect(testManager).toEqual({ firstName: "Michael", lastName: "Scott", id: 55, email: "mscott@dundermifflin.com", role: "Manager", officeNumber: 55 })
     });

    it("should have the role return manager when getRole is called", () => {
        expect(testManager.getRole()).toEqual("Manager");
    })    

    it("should return the manager's office number when getOfficeNumber is called", () => {
        expect(testManager.getOfficeNumber()).toEqual(`${testManager.officeNumber}`);
    })

} )