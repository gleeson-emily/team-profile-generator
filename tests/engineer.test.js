const Engineer = require("../library/engineer.js");

describe("engineer class", () => {
    const testEngineer = new Engineer("Joe", "Smith", 7, "joe@smith.com", "joe-codes");
    console.log(testEngineer)
    it("should return the base properties from the Employee class as well as a github property", () => {
        expect(testEngineer).toEqual({ firstName: "Joe", lastName: "Smith", id: 7, email: "joe@smith.com", github: "joe-codes", role: "Engineer"})
    })
    it("should have the role return Engineer when getRole is called", () => {
        expect(testEngineer.getRole()).toEqual("Engineer");
    })    

    it("should return the engineer when getGithub is called", () => {
        expect(testEngineer.getGithub()).toEqual(`${testEngineer.github}`);
    })

})