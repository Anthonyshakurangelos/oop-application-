const Engineer = require('../lib/engineer');

test('Engineer', () => {
    const engineer = new Engineer('Jesse', 444, 'jang@gmail.com', 'anthonyshakurangelos');
    expect(engineer.name).toEqual('');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('jang@gmail.com');
    expect(engineer.github).toEqual('anthonyshakurangelos');
});
test('name', () => {
    const engineer = new Engineer('Jesse', 444, 'jang@gmail.com', 'anthonyshakurangelos');

    expect(engineer.getName()).toEqual('Jesse');
});
test('id', () => {
    const engineer = new Engineer('Jesse', 444, 'jang@gmail.com', 'anthonyshakurangelos');
    engineer
    expect(engineer.getId()).toEqual(444);
});
test('email', () => {
    const engineer = new Engineer('Jesse', 444, 'jang@gmail.com', 'anthonyshakurangelos');
    expect(engineer.getEmail()).toEqual('jang@gmail.com');
});
test('role', () => {
    const engineer = new Engineer('Jesse', 444, 'jang@gmail.com', 'anthonyshakurangelos');
    expect(engineer.getRole()).toEqual('Engineer');
}); 
test('github', () => {
    const engineer = new Engineer('Anthony', 444, 'jang@gmail.com', 'anthonyshakurangelos');
    expect(engineer.github).toEqual('anthonyshakurangelos');
}); 
