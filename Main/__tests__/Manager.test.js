const Manager = require('../lib/Manager')


describe('Manager',()=>{
    //test properties
    test('should have an office number Property', () => {
        let officeNumber = 12;
        let manager = new Manager('name', 3, 'you@you.com',officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });
    test('should have an office number method to return the office number', () => {
        let officeNumber = 12;
        let manager = new Manager('name', 3, 'you@you.com',officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
    test('should have a role method to return the role', () => {
        let officeNumber = 12;
        let manager = new Manager('name', 3, 'you@you.com',officeNumber);
        expect(manager.getRole()).toBe("Manager");
    });
})