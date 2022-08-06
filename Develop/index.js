// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs=require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'motivation',
        message: 'what was your motivation?',
    },
    {
        type: 'build',
        message: 'Why did you build this project?',
    },
    {
        type:'solve',
        message: 'What problems does it solve?'
    },
    {
        type: 'learn',
        message: 'what did you learn?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//  What was your motivation?
//  Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
//  What problem does it solve?
//  What did you learn?