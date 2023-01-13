const Employee = require('../lib/Employee');

test('employee', () => {
    const employee = new Employee('Anthony', 777, 'anthonyshakurangelos@gmail.com');
    expect(employee.name).toEqual('Anthony');
    expect(employee.id).toEqual(777);
    expect(employee.email).toEqual('anthonyshakurangelos@gmail.com');
});
test('name', () => {
    const employee = new Employee('Anthony', 777, 'anthonyshakurangelos@gmail.com');

    expect(employee.getName()).toEqual("Anthony");
});
test('id', () => {
    const employee = new Employee('Anthony', 777, 'anthonyshakurangelos@gmail.com');

    expect(employee.getId()).toEqual(777);
});
test('email', () => {
    const employee = new Employee('Anthony', 777, 'anthonyshakurangelos@gmail.com');
    expect(employee.getEmail()).toEqual('anthonyshakurangelos@gmail.com');
});
test('role', () => {
    const employee = new Employee('Anthony', 777, 'anthonyshakurangelos@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 