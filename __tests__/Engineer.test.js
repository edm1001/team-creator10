// employee test add github username
const Engineer = require("../lib/Engineer");

test('tests if engineer card is created', () => {
  const engineer = new Engineer ('mer', 5, 'mer@email.com', 'mer5rol')

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
})