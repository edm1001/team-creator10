//test Intern add school info
const Intern = require('../lib/Intern');

test('tests if intern card is created', () => {
  const intern = new Intern('fra', 5, 'fra@UT.com', 'UT of Austin')
  
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})