const inquirer = require('inquirer');
const mainPage = require('./src/mainpage');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { createFile }= require("./src/create-file");

// empty array for number of employees created
employeeGroup = [];



//asks if user wants to add employess
const employeeQuestions = [
  {
    type: 'list',
    name: 'addEmployee',
    message: 'Do you want to add a new Employee to your team? (Engineer or Intern)',
    choices: [
      "Yes, add an Engineer to my team",
      "Yes, add an Intern to my team",
      "No, there are no more team members to add"
    ]
  }
]
//create questions for the engineer
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer\'s name?',
    validate: engineerNameInput => {
      if (engineerNameInput) {
        return true;
      } else {
        console.log("Enter the engineer\'s name");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter the engineer\'s employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Enter the engineer\'s employee ID");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the team manager\'s email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Enter the team manager\'s email address");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter the engineer\'s GitHub username',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Enter the engineer\'s GitHub username");
        return false;
      }
    }
  },
]

//create Questions for the intern
const internQuestions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is the intern\'s name?',
    validate: internNameInput => {
      if (internNameInput) {
        return true;
      } else {
        console.log("Enter your intern\'s name");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter this intern\'s employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Enter this intern\'s employee ID");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the intern\'s email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Enter the intern\'s email address");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter the intern\'s school name',
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log("What was the intern\'s school name");
        return false;
      }
    }
  },
]

//manager Questions
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Manager\'s name?',
    validate: managerNameInput => {
      if (managerNameInput) {
        return true;
      } else {
        console.log("Enter the manager\'s name");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter the team manager\'s employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Enter the team manager\'s employee ID");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the team manager\'s email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Enter the team manager\'s email address");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: 'Enter the team manager\'s office number',
    validate: officeInput => {
      if (officeInput) {
        return true;
      } else {
        console.log("Enter the team manager\'s office number");
        return false;
      }
    }
  },
]
// Manager function
const addManager = async() => {
  const result = await inquirer.prompt(managerQuestions)
  
  const pushManager = new Manager(
    result.name,
    result.id,
    result.email,
    result.officeNumber
  );
  employeeGroup.push(pushManager);
  addEmployee();
};

// addEmployee asks again to add more employees
const addEmployee = async() => {
  const result = await inquirer.prompt(employeeQuestions)
  .then(function(result) {
    switch (result.addEmployee) {
      case "Yes, add an Engineer to my team":
        addEngineer();
        break;

      case "Yes, add a Intern to my team":
        addIntern();
        break;

      case "No, there are no more employess to add":
        createFile(employeeGroup);
        break;
    }
  })
}
//created a new object and add to bucket array
const addEngineer = async() => {
  const result = await inquirer.prompt(engineerQuestions)

  const pushEngineer = new Engineer(
    result.name,
    result.id,
    result.email,
    result.github
  )
  employeeGroup.push(pushEngineer);
  addEmployee();
}

// prompts questions and creates new Intern 
const addIntern = async() => {
  const result = await inquirer.prompt(internQuestions)

  const pushIntern = new Intern(
    result.name,
    result.id,
    result.email,
    result.school
  )
  employeeGroup.push(pushIntern)
  addEmployee();
}
addManager();
