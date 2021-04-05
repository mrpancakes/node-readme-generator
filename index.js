const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = (answers) =>
  `
  # ${answers.title}

  ## Description
  ${answers.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:

  \`\`\`
  ${answers.installation}
  \`\`\`
  ## Usage
  ${answers.usage}
  ## License
  This project is licensed under the ${answers.license} license. 
  [![License: {answers.license}](https://img.shields.io/badge/License-${answers.license.split(' ').join('%20')}-blue.svg)](https://opensource.org/licenses/${answers.license.split(' ').join('-')})
  ## Contributing
  ${answers.contributing}
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${answers.tests}
  \`\`\`
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${answers.email}](mailto:${answers.email}). You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).`;
inquirer
  .prompt([
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
      name: 'url',
      message: 'Enter license URL',
      when: (answers) => answers.license === 'MIT'
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
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });