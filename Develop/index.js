// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { json } = require("stream/consumers");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "filename",
      message: "Enter your file name:",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "How can a user install your app?",
      },
    {
      type: "input",
      name: "usage",
      message: "Add usage instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license:",
      choices: [
        "MIT",
        "GPLv2",
        "Apache",
        "GPLv3",
        "BSD 3-clause",
        "Unlicensed",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Add instructions for potential contributors:",
    },
    {
      type: "input",
      name: "tests",
      message: "Describe how a user can test your application:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "Enter your email address:",
    },
  ])

// TODO: Create a readme page
.then((data) => {
const readmeArea = ({
        filename,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        github,
        emailAddress,
      }) =>
      `
# ${filename}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [GitHub](#Github)
## Installation
${installation}
## Usage
${usage}
## License
This application is covered under the [${license}] license.
![GitHub license](${data.license})
## Contributing
${contributing}
## Tests
${tests}
## Github
${github}
${emailAddress}
        `
// TODO: Create a function to write README file
    let readmeAreaContent = readmeArea(data);
    const filename = `${data.filename.toLowerCase().split(" ").join("")}.md`;
    console.log(data)
    fs.writeFile(filename,readmeAreaContent, null, (err) => 
    err ? console.log(err) : console.log("Success!")
    );
});

// TODO: Create a function to initialize app
function init() {
  // inquirer.prompt(questions)
  //     .then(function(data) {
  //         writeToFile("README.md", generateMarkdown(data));
  //         console.log(data)

  //     })

}
// Function call to initialize app
init();