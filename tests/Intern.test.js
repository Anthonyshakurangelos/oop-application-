const Intern = require('../lib/intern');

test('Intern', () => {
    const intern = new Intern('Dj', 333, 'djang@gmail.com', 'UofU');
    expect(intern.name).toEqual('Dj');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('djang@gmail.com');
    expect(intern.school).toEqual('UofU');
});
test('name', () => {
    const intern = new Intern('Dj', 333, 'djang@gmail.com', 'UofU');

    expect(intern.getName()).toEqual('Dj');
});
test('id', () => {
    const intern = new Intern('Dj', 333, 'djang@gmail.com', 'UofU');
    expect(intern.getId()).toEqual(1);
});
test('email', () => {
    const intern = new Intern('Dj', 333, 'djang@gmail.com', 'UofU');
    expect(intern.getEmail()).toEqual('djang@gmail.com');
});
test('role', () => {
    const intern = new Intern('Dj', 333, 'djang@gmail.com', 'UofU');
    expect(intern.getRole()).toEqual("Intern");


}); 


  test('school', () => {
    const intern = new Intern('Dj', 1, 'djang@gmail.com', 'UofU');
    expect(intern.school).toEqual('UofU');
}); 