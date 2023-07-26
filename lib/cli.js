const inquirer = require('inquirer');
const fs = require('fs');

const valText = (txt) =>
    new Promise((reject) => {
        if (txt.length > 3){
            reject(new Error('Logo text must be 3 characters or less'));
        };
    });


const questions = [
    {
        type: 'input',
        message: 'Please input up to 3 characters for your logo text.',
        name: 'text',
        validate: valText(this.text)
    },
    {
        type: 'input',
        message: 'Please input the color for your logo - either a color keyword or a hex code starting with a #.',
        name: 'color'
    },
    {
        type: 'list',
        message: 'Please choose what shape you would like for your logo.',
        name: 'shape',
        choices: ['Circle', 'Rectangle', 'Triangle']
    }
]
// prompt user for text - can input up to 3 characters

// prompt user for color and shape 
// after input for all prompts, a SVG file is created
// 'Generated logo.svg' is printed in the command line
// export module

