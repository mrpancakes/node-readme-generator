// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'Example Project 1'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license pertains to this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log('generated-readme.md has been created!')
        writeToFile('generated-readme.md', data);
    })
}

// Function call to initialize app
init();
