const Employee = require('../lib/Employee')


describe('Employee',()=>{
    //test properties
    test('should have a name', () => {
        let name = 'bob';
        let employee = new Employee(name, 2, 'you@you.com');
        expect(employee.name).toBe(name);
    });
    test('should have an id', () => {
        let id = 2;
        let employee = new Employee('john', id, 'you@you.com');
        expect(employee.id).toBe(id);
    });
    test('should have an email', () => {
        let email = 'you@me.com';
        let employee = new Employee('clare', 2, email);
        expect(employee.email).toBe(email);
    });

    //test methods
    test('should use a method to get the name', () => {
        let name = 'Jack';
        let employee = new Employee(name, 2, 'email@email.com');
        expect(employee.getName()).toBe(name);
    });
    test('testing getId method', () => {
        let id = 2;
        let employee = new Employee('john', id, 'you@you.com');
        expect(employee.getId()).toBe(id);
    });
    test('testing getEmail method', () => {
        let email = 'you@me.com';
        let employee = new Employee('clare', 2, email);
        expect(employee.getEmail()).toBe(email);
    });
    test('testing getRole to return Employee', () => {
        let employee = new Employee('clare', 2, 'me@me.com');
        expect(employee.getRole()).toBe('Employee');
    });


})