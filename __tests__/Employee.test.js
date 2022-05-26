const Employee = require('../lib/Employee');

test('tests if employee card is created', () => {
    const employee = new Employee('Ed', 4, 'janedoe@email.com')
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  })
  