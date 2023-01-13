const Manager = require('../lib/manager');

test('Manager', () => {
    const manager = new Manager('Anthony', 777, 'anthonyshakurangelos@gmail.com', 555);
    expect(manager.name).toEqual('Anthony');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('anthonyshakurangelos@gmail.com');
    expect(manager.officeNumber).toEqual(555);
});
test('name', () => {
    const manager = new Manager('Anthony', 777, 'anthonyshakurangelos@gmail.com', 555);

    expect(manager.getName()).toEqual('Anthony');
});
test('id', () => {
    const manager = new Manager('Anthony', 777, 'anthonyshakurangelos@gmail.com', 555);
    expect(manager.getId()).toEqual(555);
});
test('email', () => {
    const manager = new Manager('Anthony', 777, 'anthonyshakurangelos@gmail.com', 555);
    expect(manager.getEmail()).toEqual('anthonyshakurangelos@gmail.com');
});
test('role', () => {
    const manager = new Manager('Anthony', 777, 'anthonyshakurangelos@gmail.com', 555);
    expect(manager.getRole()).toEqual("Manager");
}); 
test('office Number', () => {
    const manager = new Manager('Anthony', 777, 'anthonyshakurangelos@gmail.com', 555);
    expect(manager.officeNumber).toEqual(555);
}); 