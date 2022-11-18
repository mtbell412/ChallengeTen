const Intern = require('../lib/Intern')


describe('Intern',()=>{
    //test properties
    test('should have a school property', () => {
        let school = 'UT Austin';
        let intern = new Intern('name', 3, 'you@you.com',school);
        expect(intern.school).toBe(school);
    });
    test('should have a github method to return the school', () => {
        let school = 'UT Austin';
        let intern = new Intern('name', 3, 'you@you.com',school);
        expect(intern.getSchool()).toBe(school);
    });
    test('should have a role method to return the role', () => {
        let school = 'UT Austin';
        let intern = new Intern('name', 3, 'you@you.com',school);
        expect(intern.getRole()).toBe("Intern");
    });
})