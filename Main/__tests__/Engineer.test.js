const Engineer = require('../lib/Engineer')


describe('Engineer',()=>{
    //test properties
    test('should have a github property', () => {
        let github = 'git@git.com';
        let engineer = new Engineer('name', 3, 'you@you.com',github);
        expect(engineer.github).toBe(github);
    });
    test('should have a github method to return the github', () => {
        let github = 'git@git.com';
        let engineer = new Engineer('name', 3, 'you@you.com',github);
        expect(engineer.getGithub()).toBe(github);
    });
    test('should have a role method to return the role', () => {
        let github = 'git@git.com';
        let engineer = new Engineer('name', 3, 'you@you.com',github);
        expect(engineer.getRole()).toBe("Engineer");
    });
})