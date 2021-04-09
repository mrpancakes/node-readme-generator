function renderLicenseAnchorLink(license) {
  if (license === 'None'){
    return ''
  } else {
    return (`* [License](#license)`);
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None'){
      return ''
    } else {
      return (`This project is licensed under the ${license} license. [![License: ${license}](https://img.shields.io/badge/License-${license.split(' ').join('%20')}-blue.svg)]`);
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'None'){
      return ''
    } else {
      return (`(https://opensource.org/licenses/${license.split(' ').join('-')})`);
    }
  }


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'None'){
      return ''
    } else {
      return (`## License`);
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
   ## Description
   ${data.description}
   ## Table of Contents 
   * [Installation](#installation)
   * [Usage](#usage)
   ${renderLicenseAnchorLink(data.license)}
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
   ## Installation
   To install necessary dependencies, run the following command:
  
   \`\`\`
   ${data.installation}
   \`\`\`
   ## Usage
   ${data.usage}
  
   ${renderLicenseSection(data.license)}
   ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
   ## Contributing
   ${data.contributing}
   ## Tests
   To run tests, run the following command:
   \`\`\`
   ${data.tests}
   \`\`\`
   ## Questions
   If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}/).`;
  }
  
  module.exports = generateMarkdown;
  