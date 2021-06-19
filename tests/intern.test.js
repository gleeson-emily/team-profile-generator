const Intern = require("../library/intern.js");

describe("engineer class", () => {
    const testIntern = new Intern("Tina", "Belcher", 13, "tina@horse.edu", "Wagstaff University");
    it("should return the base properties from the Employee class as well as a school property", () => {
        expect(testIntern).toEqual({ firstName: "Tina", lastName: "Belcher", id: 13, email: "tina@horse.edu", school: "Wagstaff University", role: "Intern"})
    });

    it("should have the role return Intern when getRole is called", () => {
        expect(testIntern.getRole()).toEqual("Intern");
    }); 

    it("should return the engineer when getIntern is called", () => {
        expect(testIntern.getSchool()).toEqual(`${testIntern.school}`)
});

});